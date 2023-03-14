import { navLiLinkActiveBg, navLiLinkBg, navLiLinkBorderRadius, navLiLinkColor, navLiLinkVisitedColor, navLiPadding, navUlHeight, navUlPaddingLeft, navUlRotateX } from '@ui/foundation';
import { ThemeWithProps, INavigationItemProps, INavigationBoxProps, INavigationLinkProps } from '@ui/interfaces';
import styled from 'styled-components';
import { Link } from 'gatsby';


export const NavigatinBox = styled.ul<ThemeWithProps<INavigationBoxProps>>`
  padding-left: ${navUlPaddingLeft};
  max-height: ${navUlHeight};
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: rotateX(${navUlRotateX}deg);
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.3s ease 0s;
`;

export const NavigationItemBox = styled.li<ThemeWithProps<INavigationItemProps>>`

`;

export const NavigationLink = styled.a<ThemeWithProps<INavigationLinkProps>>`
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
  &:active {
    color: ${navLiLinkVisitedColor};
  }
  &:hover {
    background-color: ${navLiLinkBg};
  }
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  &:active {
    color: ${navLiLinkVisitedColor};
  }
  &:hover {
    background-color: ${navLiLinkBg};
  }
`;