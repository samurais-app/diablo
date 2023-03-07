import type { DependencyList, EffectCallback } from 'react';
import { useRef } from 'react';
import { DOM, isEqual } from '@diabol/tool';
import useEffectWithTarget from './useEffectWithTarget';

const depsEqual = (aDeps: DependencyList, bDeps: DependencyList = []) => {
  return isEqual(aDeps, bDeps);
};

export function useDeepCompareEffectWithTarget(
  effect: EffectCallback,
  deps: DependencyList,
  target: DOM.BasicTarget<any> | DOM.BasicTarget<any>[],
) {
  const ref = useRef<DependencyList>();
  const signalRef = useRef<number>(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  useEffectWithTarget(effect, [signalRef.current], target);
};
