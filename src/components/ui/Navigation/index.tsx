import React, { ReactElement } from 'react';
import { NavigationBox } from 'components/styled/navigation';
import { NavigationItemProps, NavigationProps } from 'components/interfaces/navigation';
import { isArray } from '@tools/index';
import NavigationItem from './item';

export default function Navigation(props: NavigationProps) {
  const childs: ReactElement<NavigationItemProps>[] = isArray(props.children) ? props.children : [props.children];

  return (
    <NavigationBox {...props}>
      {childs}
    </NavigationBox>
  );
}

Navigation.Item = NavigationItem;

