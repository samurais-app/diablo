import { DependencyList, EffectCallback, useEffect, useLayoutEffect, useRef } from 'react';


export default function createCompatibilityLayoutEffect(useEffectType: typeof useEffect | typeof useLayoutEffect) {
  return (effect: EffectCallback, deps: DependencyList) => {
    const isMounted = useRef(false);

    useEffectType(() => {
      if (!isMounted.current) {
        isMounted.current = true;
        effect();
      }
    }, [deps]);
  };
};