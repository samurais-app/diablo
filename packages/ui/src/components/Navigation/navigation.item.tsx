import React, { Children, cloneElement, isValidElement, memo, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { INavigationItemBaseProps } from '@ui/interfaces';
import { isFunction, isString, path as pathname } from '@diabol/tool';
import { NavigatinBox, NavigationChildBox, NavigationItemBox, NavigationLink, RouteLink } from './styled';
import { NavigationContext } from './context';
import { useSpring } from '@react-spring/web';
import { ThemeContent } from '../Theme';


export type INavigationItemProps = Omit<INavigationItemBaseProps, 'depth' | 'active'>;


export default memo(function NavigationItem(props: INavigationItemProps) {
  const { title, depth = 1, path, children } = props as INavigationItemBaseProps;
  const { path: parentPath, onChange } = useContext(NavigationContext);
  const { theme } = useContext(ThemeContent);
  const ul = useRef<HTMLUListElement>();

  const childs = useMemo(() => {
    const items = Array.isArray(children) ? children : [children];
    return items.filter(isValidElement);
  }, [children]);

  const [open, setOpen] = useState(pathname.isMatch(path, parentPath));
  const style = useSpring({
    from: {
      height: 0,
      transform: 'rotateX(90deg)'
    },
    to: {
      height: open ? ul.current?.clientHeight : 0,
      transform: open ? 'rotateX(0deg)' : 'rotateX(90deg)'
    },
    config: {
      duration: theme.animation * 1000
    }
  });

  const onLinkClick = useCallback((_path?: string) => {
    if (!isString(_path)) return setOpen(!open);
    if (!isFunction(onChange)) return;
    onChange(_path);
  }, [open, onChange]);
  if (childs.length) return (
    <NavigationItemBox>
      <NavigationLink onClick={() => onLinkClick()}>{title}</NavigationLink>
      <NavigationChildBox depth={depth} active={open} style={style}>
        <NavigatinBox ref={ul}>{Children.map(childs, (child) => cloneElement(child, { depth: depth + 1 }))}</NavigatinBox>
      </NavigationChildBox>
    </NavigationItemBox>
  );
  return (
    <NavigationItemBox onClick={() => onLinkClick(path)}>
      <RouteLink active={pathname.isEqual(parentPath, path)}>{title as any}</RouteLink>
    </NavigationItemBox>
  );
});