import { navLiLinkActiveBg, navLiLinkBg, navLiLinkBorderRadius, navLiLinkColor, navLiLinkVisitedColor, navLiPadding, navUlHeight, navUlPaddingLeft, navUlRotateX } from '@ui/foundation';
import { ThemeWithProps, INavigationItemProps, INavigationBoxProps, INavigationLinkProps } from '@ui/interfaces';
import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { Link } from 'gatsby';


export const NavigatinBox = styled.ul<ThemeWithProps<INavigationBoxProps>>`
`;

export const NavigationItemBox = styled.li<ThemeWithProps<INavigationItemProps>>`

`;

export const NavigationChildBox = styled<ThemeWithProps<any>>(animated.div)`
  width: 100%;
  overflow: hidden;
  transform-origin: center top;
  transform-style: preserve-3d;
  padding-left: ${navUlPaddingLeft};
  box-sizing: border-box;
`;

export const NavigationLink = styled.a<ThemeWithProps<INavigationLinkProps>>`
  padding: ${navLiPadding};
  color: ${navLiLinkColor};
  border-radius: ${navLiLinkBorderRadius};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  transition: all 0.3s ease 0s;
`;

export const RouteLink = styled<ThemeWithProps<any>>(Link)`
  padding: ${navLiPadding};
  color: ${navLiLinkColor};
  border-radius: ${navLiLinkBorderRadius};
  background-color: ${navLiLinkActiveBg};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  &:active {
    color: ${navLiLinkVisitedColor};
  }
  &:hover {
    background-color: ${navLiLinkBg};
  }
`;