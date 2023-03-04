import React, { Children, cloneElement, memo, ReactElement } from 'react';
import { NavigationBox, NavigationItem } from 'components/styled/navigation';
import { NavigationItemProps, NavigationProps } from 'components/interfaces/navigation';
import { isArray } from '@tools/index';

function renderItems(childs: ReactElement<NavigationItemProps>[]) {
  return <NavigationItem>
    {Children.map(childs, (item) => {
      const { props: { children, label, path } } = item;
      if (children) {
        return cloneElement(item);
      } else {
        return cloneElement(item);
      }
    })}
  </NavigationItem>
}

export default memo(function Navigation(props: NavigationProps) {
  const childs: ReactElement<NavigationItemProps>[] = isArray(props.children) ? props.children : [props.children];

  return (
    <NavigationBox {...props}>
      {Children.map(childs, (item) => React.cloneElement(item))}
    </NavigationBox>
  );
});