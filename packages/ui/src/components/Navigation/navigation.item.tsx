import React, { isValidElement, useMemo } from 'react';
import { Link } from 'gatsby';
import { INavigationItemBaseProps } from '@ui/interfaces';
import { NavigatinBox, NavigationItemBox, NavigationLink } from './styled';
import styled from 'styled-components';


export type INavigationItemProps = Omit<INavigationItemBaseProps, 'depth'>;

const RouteLink = styled(Link)`
  text-decoration: none;
`;

export default function NavigationItem(props: INavigationItemProps) {
  const { title, depth, path, children } = props as INavigationItemBaseProps;
  const childs = useMemo(() => {
    const items = Array.isArray(children) ? children : [children];
    return items.filter(isValidElement);
  }, [children]);

  if (childs.length) return (
    <NavigationItemBox>
      <NavigationLink>{title}</NavigationLink>
      <NavigatinBox depth={depth}>{childs}</NavigatinBox>
    </NavigationItemBox>
  );
  return (
    <NavigationItemBox>
      <RouteLink to={`/${path}`}>{title}</RouteLink>
    </NavigationItemBox>
  );
}