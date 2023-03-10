import React from 'react';
import { useSize } from '@hooks/index';
import { Outline } from 'components/index';
import { DocNavigation, LayoutNav, MainLayoutContainer, MainLayoutContent } from 'components/styled/layout';
import { LayoutContentProps } from './interfaces/layout';
import { isBrowser } from '@tools/dom';


type Props = {
  data?: any;
  items?: any[];
  children: React.ReactElement;
}


function renderOutline(items: any[]) {
  return items.map((item) => {
    if (item.items) return <Outline.Link key={item.url} path={item.url} title={item.title}>{renderOutline(item.items)}</Outline.Link>;
    return <Outline.Link key={item.url} path={item.url} title={item.title} />;
  });
}

function useLayoutSize(): LayoutContentProps {
  const { width } = useSize(isBrowser ? document?.body : undefined);
  return {
    size: width,
    header: 40,
    navigation: 300,
    outline: 240
  };
}

export default function MainLayout({
  children, items }: Props) {
  const props = useLayoutSize();
  return (
    <MainLayoutContainer >
      <LayoutNav {...props} />
      <MainLayoutContent {...props}>
        {children}
      </MainLayoutContent>
      <DocNavigation {...props}>
        <Outline>
          {renderOutline(items)}
        </Outline>
      </DocNavigation>
    </MainLayoutContainer>
  );
}