import React, { useContext } from 'react';
import { } from 'gatsby';
import { IHeaderBaseProps, Switch, ThemeContent } from '@ui/index';
import { IconComponent } from 'components/index';
import { HeaderBox, IconBox } from '../../styled/header';



export default function Header({ children, github, ...props }: IHeaderBaseProps & {
  github: string;
  size: number
}) {
  const { update, theme } = useContext(ThemeContent);
  return (
    <HeaderBox
      actions={[
        <Switch
          key="sw"
          value={theme.mode === 'dark'}
          activeIcon={<IconComponent type="icon-sam" />}
          inactiveIcon={<IconComponent type="icon-soon" />}
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