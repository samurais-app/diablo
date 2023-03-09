import { INavigationItemBaseProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';


export const NavigatinBox = styled.ul<ThemeWithProps<Pick<INavigationItemBaseProps, 'depth'>>>``;

export const NavigationItemBox = styled.li``;

export const NavigationLink = styled.a`

`;