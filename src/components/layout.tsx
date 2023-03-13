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

export default function AppLayout({ location, children, data, pageResources }: any) {
  const isMobile = useMobile();
  const [show, setShow] = useState(false);
  const selectRender = useCallback((pathname: string) => {
    if (isHome(pathname) || pageResources.page.path.includes('404.html')) return children;
    return (
      <MainLayout
        showNavigation={show && !pageResources.page.path.includes('404')}
        showOutline={!pageResources.page.path.includes('404')}
        data={data}
      >
        {children}
      </MainLayout>
    );
  }, [show, children, pageResources]);
  return (
    <ThemeConfig theme={theme}>
      <Layout top={pageResources.page.path.includes('404.html') ? 50 : 0}>
        <GlobalStyled />
        {!pageResources.page.path.includes('404.html') ? <Header
          height={50}
          github={data?.site?.siteMetadata?.github}
          float
          logo={
            <LogoBox>
              <Icon type='icon-d' size={30} key="icon" />
              {isMobile ? <Icon type='icon-liebiao' size={16} key="icon" onClick={() => setShow(!show)} /> : null}
            </LogoBox>
          }
        >

        </Header> : null}
        {selectRender(location.pathname)}
      </Layout>
    </ThemeConfig>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
