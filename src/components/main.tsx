import React from 'react';
import { useMobile } from '@hooks/index';
import { DocNavigation, LayoutNav, MainLayoutContainer, MainLayoutContent } from 'components/styled/layout';


type Props = {
  data?: any;
  items?: any[];
  children: React.ReactElement;
}
export default function MainLayout({
  children }: Props) {
  const isMobile = useMobile();
  console.log(isMobile, '>>>');
  return (
    <MainLayoutContainer >
      {!isMobile ? <LayoutNav top={40} width={240} /> : null}
      <MainLayoutContent left={240} right={200}>
        {children}
      </MainLayoutContent>
      {!isMobile ? <DocNavigation top={40} width={200} /> : null}
    </MainLayoutContainer>
  );
}