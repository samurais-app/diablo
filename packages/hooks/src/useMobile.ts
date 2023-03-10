import { useMemo } from 'react';
import { DOM } from '@diabol/tool';
import { useSize } from './useSize';


export function useMobile() {
    const { width } = useSize(DOM.isBrowser ? document.body : undefined);
    return useMemo(() => DOM.isMobile(width), [width]);
}