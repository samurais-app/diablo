import { Icon, ThemeConfig } from '@ui/index';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, MainLayout } from 'components/index';
import { GlobalStyled, Layout } from 'components/styled/layout';



function isHome(pathname: string) {
  return !pathname.split('/').filter(Boolean).length;
}

export default function AppLayout({ location, children, data }) {
  const items = get(data, 'current.tableOfContents.items', []);
  const selectRender = (pathname: string) => {
    if (isHome(pathname)) return children;
    return (<MainLayout items={items}>{children}</MainLayout>);
  };

  return (
    <ThemeConfig>
      <Layout>
        <GlobalStyled />
        <Header height={40} float logo={<Icon type='icon-d' size={20} key="icon" />}>

        </Header>
        {selectRender(location.pathname)}
      </Layout>
    </ThemeConfig>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
