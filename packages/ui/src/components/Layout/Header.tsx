import { isArray } from '@frade-sam/samtools';
import { IHeaderBaseProps } from '@ui/interfaces';
import React, { memo } from 'react';
import { HeaderBox } from './Header.styled';


export default memo(function Header({
  logo,
  actions = [],
  children,
  ...props
}: IHeaderBaseProps) {
  const actionNodes = isArray(actions) ? actions.filter(Boolean) : [actions];
  return (
    <HeaderBox {...props}>
      {children}
    </HeaderBox>
  );
});