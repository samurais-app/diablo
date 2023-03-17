import { DOM } from '@diabol/tool';
import { useLayoutEffect, useEffect } from 'react';
import createEffectWithTarget from './createEffectWithTarget';

const useEffectWithTarget = createEffectWithTarget(DOM.isBrowser ? useLayoutEffect : useEffect);

export default useEffectWithTarget;
