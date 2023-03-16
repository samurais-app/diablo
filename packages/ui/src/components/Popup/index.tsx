import React, { createRef, useContext } from 'react';
import { useLatest, useUnmount, useUpdateEffect } from '@diabol/hooks';
import * as BodyLock from 'body-scroll-lock';
import { IPopupProps, PopupAction } from '@ui/interfaces';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { creatPopupRoot } from './utils';
import { PopupComponent } from './popup';
import { ThemeContent } from '../Theme';

function PopupRoot({ children, open, ...props }: IPopupProps) {
  const ref = useLatest(creatPopupRoot('popup-box'));
  const { theme } = useContext(ThemeContent);
  useUpdateEffect(() => {
    if (open) {
      BodyLock.disableBodyScroll(ref.current);
    } else {
      BodyLock.enableBodyScroll(ref.current);
    }
  }, [open]);

  useUnmount(() => {
    if (ref.current) {
      ref.current = null;
    }
  });
  return createPortal(
    <PopupComponent {...props} open={open} theme={theme}>{children}</PopupComponent>,
    ref.current);
};



Popup.useOpen = function open(props: Omit<IPopupProps, 'open' | 'onClonse'>) {
  const instance = createRef<PopupAction>();
  const { theme } = useContext(ThemeContent);
  const node = createRoot(creatPopupRoot('popup-box-call'));
  const dom = React.createElement(PopupComponent, { ...props, theme, ref: instance, });
  node.render(dom);
  useUnmount(() => {
    node.unmount();
  });
  return {
    open: () => {
      instance.current?.open();
    },
    clonse: () => {
      instance.current?.close();
    }
  };
};

export default function Popup({ children, ...props }: IPopupProps) {

  return <PopupRoot {...props}>{children}</PopupRoot>;
};