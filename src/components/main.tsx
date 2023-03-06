import React from 'react';
import { useMobile } from '@hooks/index';
import { Outline } from 'components/index';
import { DocNavigation, LayoutNav, MainLayoutContainer, MainLayoutContent } from 'components/styled/layout';


type Props = {
  data?: any;
  items?: any[];
  children: React.ReactElement;
}


function renderOutline(items: any[]) {
  return items.map((item) => {
    if (item.items) return <Outline.Link path={item.url} title={item.title}>{renderOutline(item.items)}</Outline.Link>;
    return <Outline.Link path={item.url} title={item.title} />;
  });
}

export default function MainLayout({
  children, items }: Props) {
  const isMobile = useMobile();
  console.log(items, '>>>');
  return (
    <MainLayoutContainer >
      {!isMobile ? <LayoutNav top={40} width={240} /> : null}
      <MainLayoutContent left={240} right={180} top={40}>
        {children}
      </MainLayoutContent>
      {!isMobile ? <DocNavigation top={40} width={180}>
        <Outline>
          {renderOutline(items)}
        </Outline>
      </DocNavigation> : null}
    </MainLayoutContainer>
  );
}