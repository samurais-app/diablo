import React, { useCallback } from 'react';
import { useLatest, useUnmount, useUpdateEffect } from '@diabol/hooks';
import * as BodyLock from 'body-scroll-lock';
import { useSpring } from '@react-spring/web';
import { IPopupProps } from '@ui/interfaces';
import { createPortal, } from 'react-dom';
import { PopupBase, PopupBox, PopupContainer } from './styled';
import { isFunction } from '@diabol/tool';
import { creatPopupRoot } from './utils';

function PopupRoot({ width, onChange, ...props }: IPopupProps) {
  const ref = useLatest(creatPopupRoot('popup-box'));
  const style = useSpring({
    from: {
      'pointer-events': 'none',
      opacity: 0
    },
    to: {
      'pointer-events': props.open ? 'all' : 'none',
      opacity: props.open ? 0.4 : 0
    },
  });
  const box = useSpring({
    from: {
      transform: 'scale(0)',
    },
    to: {
      transform: props.open ? 'scale(1)' : 'scale(0)',
    },
  });

  useUpdateEffect(() => {
    console.log(BodyLock);
    if (props.open) {
      BodyLock.disableBodyScroll(ref.current);
    } else {
      BodyLock.enableBodyScroll(ref.current);
    }
  }, [props.open]);

  useUnmount(() => {
    ref.current = null;
  });
  return createPortal(
    <PopupContainer>
      <PopupBase style={style} {...props} />
      <PopupBox style={box} width={width}>
        {props.children}
      </PopupBox>
    </PopupContainer>,
    ref.current);
}



Popup.open = function open() {
  return undefined;
};

export default function Popup({ children, onChange, ...props }: IPopupProps) {
  const _onChange = useCallback(() => {
    if (isFunction(onChange)) onChange(!open);
  }, [open, onChange]);
  return <PopupRoot onChange={_onChange} {...props}>{children}</PopupRoot>;
};