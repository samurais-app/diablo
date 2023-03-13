import { Icon, ThemeConfig } from '@ui/index';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { Header, MainLayout } from 'components/index';
import { GlobalStyled, Layout, LogoBox } from 'components/styled/layout';
import { useMobile } from '@hooks/index';
import theme from 'config/theme';



function isHome(pathname: string) {
  return !pathname.split('/').filter(Boolean).length;
}

export default function AppLayout({ location, children, data }) {
  const isMobile = useMobile();
  const [show, setShow] = useState(false);
  const selectRender = useCallback((pathname: string) => {
    if (isHome(pathname)) return children;
    return (<MainLayout showNavigation={show} data={data}>{children}</MainLayout>);
  }, [show]);
  return (
    <ThemeConfig theme={theme}>
      <Layout>
        <GlobalStyled />
        <Header height={50}
          float
          logo={
            <LogoBox>
              <Icon type='icon-d' size={30} key="icon" />
              {isMobile ? <Icon type='icon-liebiao' size={16} key="icon" onClick={() => setShow(!show)} /> : null}
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
