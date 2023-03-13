import { ThemeWithProps } from '@ui/index';
import { IEmptyPageProps } from 'components/interfaces/404';
import { LayoutContentProps } from 'components/interfaces/layout';
import styled, { createGlobalStyle } from 'styled-components';
import { docNavigationPadding, docNavigationShow, docNavigationWidth, layoutHeight, layoutNavBg, layoutNavHeight, layoutNavMargin, layoutNavPadding, layoutNavTranslate, layoutNavWidth, logoBoxMargin, mainContentMargin, mainContentTop, mainContentWidth } from '../foundation/layout';


export const Layout = styled.div<ThemeWithProps<IEmptyPageProps>>`
  width: 100vw;
  height: ${layoutHeight};
`;

export type ILayoutNavProps = {
  top: number;
  width: number;
}
export const LayoutNav = styled.div<ThemeWithProps<LayoutContentProps>>`
  padding: ${layoutNavPadding};
  top: ${layoutNavMargin};
  width: ${layoutNavWidth};
  height: ${layoutNavHeight};
  background-image: ${layoutNavBg};
  transform: ${layoutNavTranslate};
  transition: all 0.3s ease 0s;
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(10px);
  z-index: 1000;
  box-sizing: border-box;
  position: fixed;
  left: 0;
`;

// 文档导航栏
export const DocNavigation = styled.div<ThemeWithProps<LayoutContentProps>>`
  display: ${docNavigationShow};
  position: fixed;
  transform: ${layoutNavTranslate};
  transition: all 0.3s ease 0s;
  padding: ${docNavigationPadding};
  top: ${layoutNavMargin};
  right: 0;
  width: ${docNavigationWidth};
  height: ${layoutNavHeight};
`;

export const GlobalStyled = createGlobalStyle`
  * {
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  body {
    margin: 0;
  }
  svg[aria-hidden="true"] path {
    fill: currentColor;
  }
`;

export const MainLayoutContainer = styled['div']`
  width: 100vw;

`;


export const MainLayoutContent = styled.div<ThemeWithProps<LayoutContentProps>>`
  width: ${mainContentWidth};
  margin: ${mainContentMargin};
  padding-top: ${mainContentTop};
`;

export const MainNavigation = styled['div']`
  width: 20px;
  left: 0;
`;
export const MainContent = styled['div']`

`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  & svg:first-child {
    margin-right: ${logoBoxMargin};
  }
`;