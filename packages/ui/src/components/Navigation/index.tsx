import React, { isValidElement, memo, NamedExoticComponent, useMemo } from 'react';
import { INavigationItemProps, INavigationProps } from '@ui/interfaces';
import NavigationItem from './navigation.item';
import { NavigatinBox } from './styled';
import { NavigationProvider } from './context';


interface INavigationType {
  (props: INavigationProps): JSX.Element
  Item?: NamedExoticComponent<INavigationItemProps>;
};

const Navigation = memo(function Navigation({
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
}) as INavigationType;
export default Navigation;
Navigation.Item = NavigationItem as NamedExoticComponent<INavigationItemProps>;