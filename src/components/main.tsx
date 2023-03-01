import React from 'react';
import { MainLayoutContainer } from './styled/layout';


type Props = {
  children: React.ReactElement;
}
export default function MainLayout({
  children
}: Props) {
  return (
    <MainLayoutContainer >
      {children}
    </MainLayoutContainer>
  );
}