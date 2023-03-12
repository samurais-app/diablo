import { isArray } from '@diabol/tool';
import { isValidElement, useMemo } from 'react';


export default function useChildrens<P>(children?: React.ElementType<P>) {
  return useMemo(() => (isArray(children) ? children : [children]).filter(isValidElement), [children]) as unknown as React.ElementType<P>;
}