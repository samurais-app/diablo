import { useRafState, useUnmount, useUpdateEffect } from '@diabol/hooks';
import React, { ForwardedRef, useCallback, useImperativeHandle, useRef } from 'react';
import { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { PopupBase, PopupBox, PopupClose, PopupContainer } from './styled';
import { useChain, useSpringRef, useTransition } from '@react-spring/web';
import { IPopupProps, PopupAction, Theme } from '@ui/interfaces';
import * as BodyLock from 'body-scroll-lock';
import { isBoolean, isFunction } from '@diabol/tool';
import Icon from '../Icon';

export const PopupComponent = forwardRef(({ width, onClonse, children, open, theme, ...props }: IPopupProps & { theme: Theme }, instance: ForwardedRef<PopupAction>) => {
  const ref = useRef();
  const [status, setStatus] = useRafState(open);
  const backdropApi = useSpringRef();
  const modalApi = useSpringRef();

  const backdrop = useTransition(status, {
    ref: backdropApi,
    from: { 'pointer-events': 'none', opacity: 0, },
    enter: { 'pointer-events': 'all', opacity: 1 },
    leave: { 'pointer-events': 'none', opacity: 0 },
    config: {
      duration: 300
    }
  });

  const modal = useTransition(status, {
    ref: modalApi,
    from: { transform: 'scale(0)', },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(0)' },
    config: {
      duration: 300
    }
  });

  const closeHandler = useCallback(() => {
    if (isBoolean(open) && isFunction(onClonse)) {
      onClonse();
    } else {
      setStatus(false);
    }
  }, [open, onClonse]);

  useImperativeHandle(
    instance,
    () => ({
      open: () => setStatus(true),
      close: () => setStatus(false),
    }),
    [status],
  );

  useChain(status ? [backdropApi, modalApi] : [modalApi, backdropApi], [
    0,
    status ? 0.1 : 0.2,
  ]);

  useUpdateEffect(() => {
    if (isBoolean(open) && open !== status) {
      setStatus(open);
    }
  }, [open, status, onClonse]);


  useUpdateEffect(() => {
    if (status) {
      BodyLock.disableBodyScroll(ref.current);
    } else {
      BodyLock.enableBodyScroll(ref.current);
    }
  }, [status]);

  useUnmount(() => {
    ref.current = undefined;
  });

  return (
    <ThemeProvider theme={theme}>
      <PopupContainer ref={ref} {...{ ...props, open }}>
        {backdrop((style, item) => item && (<PopupBase style={style} />))}
        {modal((style, item) => item && (<PopupBox style={style} width={width}>
          <>
            <PopupClose {...props} onClick={closeHandler}>
              <Icon type='icon-close' size={12} />
            </PopupClose>
            {children}
          </>
        </PopupBox>))}
      </PopupContainer>
    </ThemeProvider>
  );
});