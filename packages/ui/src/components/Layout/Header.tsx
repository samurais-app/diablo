import { useMobile } from '@diabol/hooks';
import { isArray } from '@diabol/tool';
import { IHeaderBaseProps } from '@ui/interfaces';
import React, { useMemo } from 'react';
import { Actions } from './Header.action';
import { HeaderBox, HeaderContent, HeaderLogo } from './styled';



type LogoHeaderProps = {
  children: string | JSX.Element | JSX.Element[]
}
function LogoHeader(props: LogoHeaderProps) {
  return (
    <HeaderLogo>{props.children}</HeaderLogo>
  );
}

export default function Header({
  logo,
  actions = [],
  children,
  ...props
}: IHeaderBaseProps) {
  const mobile = useMobile();
  const actionNodes = useMemo(() => isArray(actions) ? actions.filter(Boolean) : [actions], [actions]) as JSX.Element | JSX.Element[];
  return (
    <HeaderBox {...props}>
      <LogoHeader>{logo}</LogoHeader>
      <HeaderContent>{children}</HeaderContent>
      <Actions isMobile={mobile}>{actionNodes}</Actions>
    </HeaderBox>
  );
}