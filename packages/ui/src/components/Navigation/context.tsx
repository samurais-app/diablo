/* eslint-disable @typescript-eslint/no-empty-function */
import { isEmpty, isFunction } from '@diabol/tool';
import { INavigationContext } from '@ui/interfaces';
import React, { createContext, useCallback, useMemo, useState } from 'react';


export const NavigationContext = createContext<INavigationContext>({
  path: '',
  onChange() {
    return undefined;
  },
});


export function NavigationProvider({ children, ...props }: INavigationContext & { children: JSX.Element | JSX.Element[] }) {
  const { path = '', onChange = () => { } } = props;
  const [pathname, setPathname] = useState(path);

  const _onChange = useCallback((path: string) => {
    if (isFunction(onChange)) onChange(path);
    if (!isEmpty(path)) setPathname(path);
  }, [onChange]);

  const _path = useMemo(() => pathname ?? path, [pathname, path]);

  return (
    <NavigationContext.Provider value={{ path: _path, onChange: _onChange }}>
      {children}
    </NavigationContext.Provider>
  );
}