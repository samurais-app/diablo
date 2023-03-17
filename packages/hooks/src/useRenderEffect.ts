import { DOM } from '@diabol/tool';
import { useEffect, useLayoutEffect } from 'react';
import createCompatibilityLayoutEffect from './createCompatibilityLayoutEffect';


export const useRenderEffect = createCompatibilityLayoutEffect(DOM.isBrowser ? useLayoutEffect : useEffect);