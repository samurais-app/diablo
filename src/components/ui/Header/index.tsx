import React, { useContext } from 'react';
import { } from 'gatsby';
import { Icon, IHeaderBaseProps, Switch, ThemeContent } from '@ui/index';
import { HeaderBox, IconBox } from './styled';



export default function Header({ children, github, ...props }: IHeaderBaseProps & {
  github
}) {
  const { update, theme } = useContext(ThemeContent);
  return (
    <HeaderBox
      actions={[
        <Switch key="sw" activeIcon={<Icon type="icon-sam" />} value={theme.mode === 'dark'} inactiveIcon={<Icon type="icon-soon" />} onChange={(e) => {
          update(e ? 'dark' : 'light');
        }} />,
        <IconBox type='icon-github' size={20} key="icon" onClick={() => window.open(github, '_self')} />
      ]}
      {...props}
    >
      {children}
    </HeaderBox>
  );
}