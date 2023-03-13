import React, { useContext } from 'react';
import { Icon, IHeaderBaseProps, Switch, ThemeContent } from '@ui/index';
import { HeaderBox, IconBox } from './styled';



export default function Header({ children, ...props }: IHeaderBaseProps) {
  const { update, theme } = useContext(ThemeContent);
  console.log(theme);
  return (
    <HeaderBox
      actions={[
        <Switch key="sw" activeIcon={<Icon type="icon-sam" />} value={theme.mode === 'dark'} inactiveIcon={<Icon type="icon-soon" />} onChange={(e) => {
          update(e ? 'dark' : 'light');
        }} />,
        <IconBox type='icon-github' size={20} key="icon" />
      ]}
      {...props}
    >
      {children}
    </HeaderBox>
  );
}