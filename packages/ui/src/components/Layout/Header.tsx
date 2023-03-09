import { isArray } from '@frade-sam/samtools';
import { IHeaderBaseProps } from '@ui/interfaces';
import React, { memo, useMemo } from 'react';
import { HeaderActions, HeaderBox, HeaderContent, HeaderLogo } from './styled';


type ActionsProps = {
  children: IHeaderBaseProps['children']
}

function Actions({ children }: ActionsProps) {
  return (
    <HeaderActions>{children}</HeaderActions>
  );
}

type LogoHeaderProps = {
  children: string | JSX.Element | JSX.Element[]
}
function LogoHeader(props: LogoHeaderProps) {
  return (
    <HeaderLogo>{props.children}</HeaderLogo>
  );
}

export default memo(function Header({
  logo,
  actions = [],
  children,
  ...props
}: IHeaderBaseProps) {
  const actionNodes = useMemo(() => isArray(actions) ? actions.filter(Boolean) : [actions], [actions]) as string | JSX.Element | JSX.Element[];
  return (
    <HeaderBox {...props}>
      <LogoHeader>{logo}</LogoHeader>
      <HeaderContent>{children}</HeaderContent>
      <Actions>{actionNodes}</Actions>
    </HeaderBox>
  );
});