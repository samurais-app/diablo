import { useMemo } from 'react';
import { DOM } from '@diablo/tool';
import { useSize } from './useSize';


export function useMobile() {
    const { width } = useSize(typeof window !== 'undefined' ? document.body : undefined);
    return useMemo(() => DOM.isMobile(width), [width]);
}