import React from 'react';
import { IButtonProps } from '@ui/interfaces';
import { ButtonBox, ButtonLoading } from './styled';
import { useTransition } from '@react-spring/web';
import Icon from '../Icon';


export default function Button({
  type = 'primary',
  htmlType = 'button',
  loading = false,
  children,
  ...props
}: IButtonProps) {
  const animation = useTransition(loading, {
    from: { transform: 'scale(0)', },
    enter: { transform: 'scale(1)', },
    leave: { transform: 'scale(0)', },
  });
  return (
    <ButtonBox htmlType={type} type={htmlType} {...props}>
      {
        children
      }
      {animation((style, item) => item ? <ButtonLoading style={style}><Icon type="icon-loading" size={18} /></ButtonLoading> : null)}
    </ButtonBox>
  );
}