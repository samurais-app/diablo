import React, { isValidElement, useMemo } from 'react';
import { INavigationItemBaseProps } from '@ui/interfaces';
import { NavigatinBox, NavigationItemBox, NavigationLink } from './styled';


export type INavigationItemProps = Omit<INavigationItemBaseProps, 'depth'>;

export default function NavigationItem(props: INavigationItemProps) {
  const { title, depth, children } = props as INavigationItemBaseProps;
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
      <NavigationLink>{title}</NavigationLink>
    </NavigationItemBox>
  );
}