import React, { useContext } from 'react';
import { } from 'gatsby';
import { Icon, IHeaderBaseProps, Switch, ThemeContent } from '@ui/index';
import { HeaderBox, IconBox } from '../../styled/header';



export default function Header({ children, github, ...props }: IHeaderBaseProps & {
  github: string;
  size: number
}) {
  const { update, theme } = useContext(ThemeContent);
  console.log(theme.mode);
  return (
    <HeaderBox
      actions={[
        <Switch
          key="sw"
          value={theme.mode === 'dark'}
          activeIcon={<Icon type="icon-sam" />}
          inactiveIcon={<Icon type="icon-soon" />}
          onChange={(e) => {
            update(e ? 'dark' : 'light');
          }}
        />,
        <IconBox
          type='icon-github'
          size={20}
          key="icon"
          onClick={() => window.open(github, '_self')}
        />
      ]}
      {...props}
    >
      {children}
    </HeaderBox>
  );
}