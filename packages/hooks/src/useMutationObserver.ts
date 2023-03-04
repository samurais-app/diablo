import { DOM } from '@diablo/tools';
import { useDeepCompareEffectWithTarget } from './useDeepCompareEffectWithTarget';
import { useLatest } from './useLatest';


export function useMutationObserver(
  callback: MutationCallback,
  target: DOM.BasicTarget,
  options: MutationObserverInit = {}) {

  const callbackRef = useLatest(callback);

  useDeepCompareEffectWithTarget(
    () => {
      const element = DOM.getTargetElement(target);
      if (!element) {
        return;
      }
      const observer = new MutationObserver(callbackRef.current);
      observer.observe(element, options);
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    },
    [options],
    target,
  );
}