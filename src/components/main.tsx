import React from 'react';
import { useSize } from '@hooks/index';
import get from 'lodash.get';
import { Outline } from 'components/index';
import { DocNavigation, LayoutNav, MainLayoutContainer, MainLayoutContent } from 'components/styled/layout';
import { LayoutContentProps } from './interfaces/layout';
import { isBrowser } from '@tools/dom';
import { itemsArr } from 'site/utils/category';
import { Navigation } from '@ui/index';


type Props = {
  data?: any;
  showOutline?: boolean;
  showNavigation?: boolean;
  children: React.ReactElement;
}


function renderOutline(items: any[]) {
  return items.map((item) => {
    if (item.items) return <Outline.Link key={item.url} path={item.url} title={item.title}>{renderOutline(item.items)}</Outline.Link>;
    return <Outline.Link key={item.url} path={item.url} title={item.title} />;
  });
}

function useLayoutSize(props: Props): LayoutContentProps {
  const { width } = useSize(isBrowser ? document?.body : undefined);
  return {
    showNavigation: props.showNavigation,
    showOutline: props.showOutline,
    size: width,
    header: 50,
    navigation: 300,
    outline: 240
  };
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

export default function MainLayout(props: Props) {
  const {
    children,
    data,
  } = props;
  const _props = useLayoutSize(props);
  const items = get(data, 'current.tableOfContents.items', []);
  const nodes = getNavitaion(get(data, 'allMdx.edges', []).map((item) => item.node));
  console.log(_props);
  return (
    <MainLayoutContainer >
      <LayoutNav {..._props} >
        <Navigation>
          {nodes.map((item) => {
            return <Navigation.Item title={item.title} path={item.key} key={item.key}>{
              item.children.map((child) => (<Navigation.Item key={child.fields.slug} title={child.frontmatter.title} path={child.fields.slug} />))
            }</Navigation.Item>;
          })}
        </Navigation>
      </LayoutNav>
      <MainLayoutContent {..._props}>
        {children}
      </MainLayoutContent>
      <DocNavigation {..._props}>
        <Outline>
          {renderOutline(items)}
        </Outline>
      </DocNavigation>
    </MainLayoutContainer>
  );
}