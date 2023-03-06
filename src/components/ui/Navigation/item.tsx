import { isArray } from '@tools/index';
import { NavigationItemProps } from 'components/interfaces/navigation';
import { NavigationItemsBox } from 'components/styled/navigation';
import React, { Children, cloneElement, ReactElement } from 'react';


function renderItems(childs: ReactElement<NavigationItemProps>[]) {
  return <NavigationItemsBox>
    {Children.map(childs, (item) => {
      const { props: { children } } = item;
      const childs: ReactElement<NavigationItemProps>[] = isArray(children) ? children : [children];
      if (children) {
        return (
          <NavigationItemsBox>
            {renderItems(childs)}
          </NavigationItemsBox>
        );
      } else {
        return cloneElement(item);
      }
    })}
  </NavigationItemsBox>;
}


export default function NavigationItem(props: NavigationItemProps) {

  return <NavigationItemsBox>
    {Children.map(props.children, (item) => {
      const { props: { children, label } } = item;
      const childs: ReactElement<NavigationItemProps>[] = isArray(children) ? children : [children];
      if (children) {
        return (
          <NavigationItemsBox>
            {label}
            {renderItems(childs)}
          </NavigationItemsBox>
        );
      } else {
        return cloneElement(item);
      }
    })}
  </NavigationItemsBox>;
}