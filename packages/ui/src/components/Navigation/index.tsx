import React, { isValidElement, useMemo } from 'react';
import { INavigationProps } from '@ui/interfaces';
import NavigationItem from './navigation.item';
import { NavigatinBox } from './styled';


export default function Navigation({
  children
}: INavigationProps) {
  const childs = useMemo(() => {
    const items = Array.isArray(children) ? children : [children];
    return items.filter(isValidElement);
  }, [children]);

  return (
    <NavigatinBox>
      {childs}
    </NavigatinBox>
  );
}

Navigation.Item = NavigationItem;