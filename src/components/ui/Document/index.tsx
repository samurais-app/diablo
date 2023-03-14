import { Icon, ThemeConfig, Navigation } from '@ui/index';
import React, { useMemo, useState } from 'react';
import get from 'lodash.get';
import theme from 'config/theme';
import { DocumentContent, DocumentLayout, DocumentNavigation, DocumentOutline, GlobalStyled, LogoBox, MainLayout } from 'components/styled/document';
import { useMobile, useSize } from '@hooks/index';
import { itemsArr } from 'site/utils/category';
import Header from '../Header';
import Outline from '../Outline';
import { DOM } from '@tools/index';

function isHome({ location, pageResources }) {
  return !location.pathname.split('/').filter(Boolean).length || pageResources?.page?.path?.includes('404');
}

function getNavitaion(nodes: NodeField[]) {
  return itemsArr.map((i) => {
    return {
      title: i.text,
      key: i.itemKey,
      children: nodes.filter((node) => node.frontmatter.category === i.itemKey)
    };
  });
}

function renderOutline(items: any[]) {
  return items.map((item) => {
    if (item.items) return <Outline.Link key={item.url} path={item.url} title={item.title}>{renderOutline(item.items)}</Outline.Link>;
    return <Outline.Link key={item.url} path={item.url} title={item.title} />;
  });
}

export default function Document({ location, children, data, pageResources }) {
  const isMobile = useMobile();
  const { width } = useSize(DOM.isBrowser ? document?.body : undefined);
  const items = get(data, 'current.tableOfContents.items', []);
  const path = get(pageResources, 'page.path', '');
  const nodes = getNavitaion(get(data, 'allMdx.edges', []).map((item) => item.node));
  const [show, setShow] = useState(false);
  const home = isHome({ location, pageResources });
  const top = path.includes('404') ? 50 : 0;
  const header = useMemo(() => {
    return (
      <Header
        height={50}
        github={data?.site?.siteMetadata?.github}
        float
        logo={
          <LogoBox>
            <Icon type='icon-d' size={30} key="icon" />
            {isMobile ? <Icon type='icon-liebiao' size={16} key="icon" onClick={() => setShow(!show)} /> : null}
          </LogoBox>
        }
      />
    );
  }, [isMobile, show, data, path]);

  return (
    <ThemeConfig theme={theme}>
      <DocumentLayout top={top}>
        <GlobalStyled />
        {header}
        {home ?
          children :
          <MainLayout>
            <DocumentNavigation top={50} width={260} size={width} show={show}>
              <Navigation path={location.pathname}>
                {nodes.map((item) => {
                  return <Navigation.Item title={item.title} path={item.key} key={item.key}>{
                    item.children.map((child) => (<Navigation.Item key={child.fields.slug} title={child.frontmatter.title} path={child.fields.slug} />))
                  }</Navigation.Item>;
                })}
              </Navigation>
            </DocumentNavigation>
            <DocumentContent top={50} left={260} right={200} size={width} showNavigation={show} showOutline={!path.includes('404')}>
              {children}
            </DocumentContent>
            <DocumentOutline top={50} width={200} size={width} show={!path.includes('404')}>
              <Outline>
                {renderOutline(items)}
              </Outline>
            </DocumentOutline>
          </MainLayout>
        }
      </DocumentLayout>
    </ThemeConfig>
  );
}