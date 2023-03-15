import React, { useMemo } from 'react';
import { useLatest, useUnmount, useUpdateEffect } from '@diabol/hooks';
import * as BodyLock from 'body-scroll-lock';
import { useSpring } from '@react-spring/web';
import { IPopupProps } from '@ui/interfaces';
import { createPortal, } from 'react-dom';
import { PopupBase, PopupBox, PopupClose, PopupContainer } from './styled';
import { creatPopupRoot } from './utils';
import Icon from '../Icon';

function PopupRoot({ width, onClonse, children, ...props }: IPopupProps) {
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
    if (props.open) {
      BodyLock.disableBodyScroll(ref.current);
    } else {
      BodyLock.enableBodyScroll(ref.current);
    }
  }, [props.open]);

  useUnmount(() => {
    if (ref.current) {
      ref.current = null;
    }
  });
  return createPortal(
    <PopupContainer>
      <PopupBase style={style} {...props} />
      <PopupBox style={box} width={width}>
        <>
          <PopupClose {...props} onClick={onClonse}>
            <Icon type='icon-close' size={16} />
          </PopupClose>
          {children}
        </>
      </PopupBox>
    </PopupContainer>,
    ref.current);
}



Popup.open = function open() {
  return undefined;
};

export default function Popup({ children, ...props }: IPopupProps) {
  return <PopupRoot {...props}>{children}</PopupRoot>;
};