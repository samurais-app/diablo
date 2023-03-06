import { ThemeWithProps } from '@ui/index';
import { NavigationItemProps, NavigationProps } from 'components/interfaces/navigation';
import styled from 'styled-components';


export const NavigationBox = styled.div<ThemeWithProps<Omit<NavigationProps, 'children'>>>`
  width: 100%;
`;

export const NavigationItemsBox = styled.ul`
  list-style: none;
`;

export const NavigationItemBox = styled.li<ThemeWithProps<Omit<NavigationItemProps, 'children' | 'index'>>>`
  list-style: none;
`;