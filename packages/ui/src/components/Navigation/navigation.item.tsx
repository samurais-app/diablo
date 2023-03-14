import React, { Children, cloneElement, isValidElement, memo, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { INavigationItemBaseProps } from '@ui/interfaces';
import { navigate } from 'gatsby';
import { isFunction, path as pathname } from '@diabol/tool';
import { NavigatinBox, NavigationItemBox, NavigationLink } from './styled';
import { NavigationContext } from './context';


export type INavigationItemProps = Omit<INavigationItemBaseProps, 'depth' | 'active'>;


export default memo(function NavigationItem(props: INavigationItemProps) {
  const { title, depth = 1, path, children } = props as INavigationItemBaseProps;
  const { path: parentPath, onChange } = useContext(NavigationContext);

  const childs = useMemo(() => {
    const items = Array.isArray(children) ? children : [children];
    return items.filter(isValidElement);
  }, [children]);

  const [open, setOpen] = useState(pathname.isMatch(path, parentPath));

  const _onChange = useCallback((path: string, isChild = false) => {
    if (!isFunction(onChange)) return;
    if (!isChild) {
      onChange(path);
      return navigate(path);
    }
    setOpen(!open);
  }, [onChange, open]);

  useLayoutEffect(() => {
    setOpen(pathname.isMatch(path, parentPath));
  }, [parentPath, path]);


  if (childs.length) return (
    <NavigationItemBox>
      <NavigationLink onClick={() => _onChange(path, true)}>{title}</NavigationLink>
      <NavigatinBox depth={depth} active={open}>{Children.map(childs, (child) => cloneElement(child, { depth: depth + 1 }))}</NavigatinBox>
    </NavigationItemBox>
  );
  return (
    <NavigationItemBox onClick={() => _onChange(path)}>
      <NavigationLink active={pathname.isEqual(parentPath, path)}>{title as any}</NavigationLink>
    </NavigationItemBox>
  );
});