import React from 'react';
import { IButtonProps } from '@ui/interfaces';
import { ButtonBox, ButtonContent, ButtonLoading } from './styled';
import { useChain, useSpring, useSpringRef, useTransition } from '@react-spring/web';
import Icon from '../Icon';
import { useThemeContext } from '../Theme';


export default function Button({
  type = 'primary',
  htmlType = 'button',
  loading = false,
  children,
  ...props
}: IButtonProps) {
  const theme = useThemeContext();
  const loadingRef = useSpringRef();
  const contentRef = useSpringRef();
  console.log(theme.Unit(25));

  const contentAni = useSpring({
    ref: contentRef,
    marginRight: loading ? 10 : 0,
  });
  const loadingAni = useTransition(loading, {
    ref: loadingRef,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  useChain(loading ? [contentRef, loadingRef] : [loadingRef, contentRef], [
    0,
    loading ? 0.2 : 0.4,
  ]);

  return (
    <ButtonBox htmlType={type} type={htmlType} {...props}>
      <ButtonContent style={contentAni}>
        {
          children
        }
      </ButtonContent>
      {loadingAni((style, item) => item ? <ButtonLoading style={style}><Icon type="icon-loading" size={18} /></ButtonLoading> : null)}
    </ButtonBox>
  );
}