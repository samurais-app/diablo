import { Icon, ThemeConfig } from '@ui/index';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, MainLayout } from 'components/index';
import { GlobalStyled, Layout, LogoBox } from 'components/styled/layout';
import { useMobile } from '@hooks/index';



function isHome(pathname: string) {
  return !pathname.split('/').filter(Boolean).length;
}

export default function AppLayout({ location, children, data }) {
  const items = get(data, 'current.tableOfContents.items', []);
  const isMobile = useMobile();
  const selectRender = (pathname: string) => {
    if (isHome(pathname)) return children;
    return (<MainLayout items={items}>{children}</MainLayout>);
  };

  return (
    <ThemeConfig>
      <Layout>
        <GlobalStyled />
        <Header height={40}
          float
          logo={
            <LogoBox>
              <Icon type='icon-d' size={20} key="icon" />
              {isMobile ? <Icon type='icon-liebiao' size={12} key="icon" /> : null}
            </LogoBox>
          }
        >

        </Header>
        {selectRender(location.pathname)}
      </Layout>
    </ThemeConfig>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
