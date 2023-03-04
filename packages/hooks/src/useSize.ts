import ResizeObserver from 'resize-observer-polyfill';
import { useRafState } from './useRafState';
import { DOM } from '@diablo/tool';
import useIsomorphicLayoutEffectWithTarget from './useIsomorphicLayoutEffectWithTarget';

type Size = { width: number; height: number };

export function useSize(target: DOM.BasicTarget): Size | undefined {
  let el = DOM.getTargetElement(target);
  const [state, setState] = useRafState<Size | undefined>(
    el ? { width: el.clientWidth, height: el.clientHeight } : { width: 0, height: 0 },
  );

  useIsomorphicLayoutEffectWithTarget(
    () => {
      el = DOM.getTargetElement(target);

      if (!el) {
        return;
      }

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { clientWidth, clientHeight } = entry.target;
          setState({ width: clientWidth, height: clientHeight });
        });
      });
      resizeObserver.observe(el);
      return () => {
        resizeObserver.disconnect();
      };
    },
    [],
    target,
  );

  return state;
}


