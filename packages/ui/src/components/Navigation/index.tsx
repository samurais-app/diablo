import React, { isValidElement, useMemo } from 'react';
import { INavigationProps } from '@ui/interfaces';
import NavigationItem from './navigation.item';
import { NavigatinBox } from './styled';
import { NavigationProvider } from './context';


export default function Navigation({
  children,
  ...props
}: INavigationProps) {
  const childs = useMemo(() => {
    const items = Array.isArray(children) ? children : [children];
    return items.filter(isValidElement);
  }, [children]);

  return (
    <NavigatinBox>
      <NavigationProvider {...props}>
        {childs}
      </NavigationProvider>
    </NavigatinBox>
  );
}

Navigation.Item = NavigationItem;