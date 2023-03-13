import { navLiLinkColor, navLiLinkVisitedColor, navLiPadding } from '@ui/foundation/navigation';
import { INavigationItemBaseProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';


export const NavigatinBox = styled.ul<ThemeWithProps<Pick<INavigationItemBaseProps, 'depth'>>>``;

export const NavigationItemBox = styled.li`
  padding: ${navLiPadding};
  & a {
    color: ${navLiLinkColor};
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
  & a:active {
    color: ${navLiLinkVisitedColor};
  }
`;

export const NavigationLink = styled.a`

`;