import React from 'react';
import { Icon, IHeaderBaseProps, Layout, Switch } from '@ui/index';

export default function Header({ children, ...props }: IHeaderBaseProps) {
  return (
    <Layout.Header
      actions={[
        <Icon type='icon-roundclosefill' key="icon2" />,
        <Switch key="sw" />,
        <Icon type='icon-roundclosefill' key="icon" />
      ]}
      {...props}
    >
      {children}
    </Layout.Header>
  );
}