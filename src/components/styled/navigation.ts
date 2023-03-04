import { ThemeWithProps } from '@ui/index';
import { NavigationItemProps, NavigationProps } from 'components/interfaces/navigation';
import styled from 'styled-components';


export const NavigationBox = styled.div<ThemeWithProps<NavigationProps>>`
  width: 100%;
`;

export const NavigationItems = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li<ThemeWithProps<NavigationItemProps>>`
  list-style: none;
`;