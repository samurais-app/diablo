import { ThemeWithProps } from '@ui/index';
import styled, { createGlobalStyle } from 'styled-components';
import { layoutNavBorder, layoutNavHeight, layoutNavMargin, layoutNavWidth, mainContentMargin, mainContentWidth } from '../foundation/layout';


export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export type ILayoutNavProps = {
  top: number;
  width: number;
}
export const LayoutNav = styled.div<ThemeWithProps<ILayoutNavProps>>`
  position: fixed;
  border-right: 1px solid ${layoutNavBorder};
  top: ${layoutNavMargin};
  left: 0;
  width: ${layoutNavWidth};
  height: ${layoutNavHeight};
`;

// 文档导航栏
export const DocNavigation = styled.div`
  position: fixed;
  border-left: 1px solid ${layoutNavBorder};
  top: ${layoutNavMargin};
  right: 0;
  width: ${layoutNavWidth};
  height: ${layoutNavHeight};
`;

export const GlobalStyled = createGlobalStyle`
  * {
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  body {
    margin: 0;
  }
`;

export const MainLayoutContainer = styled.div`
  width: 100vw;
`;


export type IMainLayoutContentProps = {
  left?: number;
  right?: number;
}
export const MainLayoutContent = styled.div<ThemeWithProps<IMainLayoutContentProps>>`
  width: ${mainContentWidth};
  margin: ${mainContentMargin};
`;

export const MainNavigation = styled.div`
  width: 20px;
  left: 0;
`;
export const MainContent = styled.div`

`;