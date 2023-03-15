import { ThemeWithProps } from '@ui/interfaces';
import { docContentMargin, docContentPaddingTop, docContentWidth, docLayoutHeight, docLayoutTop, docNavigationBg, docNavigationHeight, docNavigationPadding, docNavigationTop, docNavigationTranslate, docNavigationWidth, docOutlinePadding, docOutlineTranslate, logoBoxMargin } from 'components/foundation/document';
import { IDocumentContentProps, IDocumentLayoutProps, IDocumentNavigationProps, IDocumentOutlineProps } from 'components/interfaces';
import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle<ThemeWithProps<object>>`
  * {
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  body {
    margin: 0;
    background-color: ${props => props.theme.color.background};
  }
  svg[aria-hidden="true"] path {
    fill: currentColor;
  }
`;

export const DocumentLayout = styled.div<ThemeWithProps<IDocumentLayoutProps>>`
  width: 100vw;
  overflow: auto;
  height: ${docLayoutHeight};
  padding-top: ${docLayoutTop};
`;

export const MainLayout = styled.div`
  width: 100vw;
`;

export const DocumentNavigation = styled.div<ThemeWithProps<IDocumentNavigationProps>>`
  padding: ${docNavigationPadding};
  top: ${docNavigationTop};
  width: ${docNavigationWidth};
  height: ${docNavigationHeight};
  background-image: ${docNavigationBg};
  transform: ${docNavigationTranslate};
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(10px);
  transition: all 0.3s ease 0s;
  z-index: 1000;
  box-sizing: border-box;
  position: fixed;
  left: 0;
`;

export const DocumentContent = styled.div<ThemeWithProps<IDocumentContentProps>>`
  width: ${docContentWidth};
  margin: ${docContentMargin};
  padding-top: ${docContentPaddingTop};
`;

export const DocumentOutline = styled.div<ThemeWithProps<IDocumentOutlineProps>>`
  position: fixed;
  transform: ${docOutlineTranslate};
  transition: all 0.3s ease 0s;
  padding: ${docOutlinePadding};
  top: ${docNavigationTop};
  right: 0;
  width: ${docNavigationWidth};
  height: ${docNavigationHeight};
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  & svg:first-child {
    margin-right: ${logoBoxMargin};
  }
`;