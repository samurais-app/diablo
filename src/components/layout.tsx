import { getThemeMode, Icon, ThemeConfig } from '@ui/index';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, MainLayout } from 'components/index';
import { GlobalStyled, Layout, LogoBox } from 'components/styled/layout';
import { useMobile } from '@hooks/index';
import { light, dark } from 'config/theme';



function isHome(pathname: string) {
  return !pathname.split('/').filter(Boolean).length;
}

export default function AppLayout({ location, children, data }) {
  const isMobile = useMobile();
  const mode = getThemeMode();
  const selectRender = (pathname: string) => {
    if (isHome(pathname)) return children;
    return (<MainLayout data={data}>{children}</MainLayout>);
  };

  return (
    <ThemeConfig theme={mode === 'light' ? light : dark}>
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
