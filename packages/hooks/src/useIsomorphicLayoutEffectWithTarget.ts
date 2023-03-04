import { DOM } from '@diablo/tool';
import useEffectWithTarget from './useEffectWithTarget';
import useLayoutEffectWithTarget from './useLayoutEffectWithTarget';

const useIsomorphicLayoutEffectWithTarget = DOM.isBrowser
  ? useLayoutEffectWithTarget
  : useEffectWithTarget;

export default useIsomorphicLayoutEffectWithTarget;
