/* eslint-disable indent */
import { flip, offset, ReferenceType, shift, Strategy, useFloating } from '@floating-ui/react-dom';
import { isBoolean, isUndefined } from '@diabol/tool';
import { useCallback, useEffect, useState } from 'react';
import { useRenderEffect } from './useRenderEffect';

export interface IPosition extends Pick<React.CSSProperties, 'top' | 'left' | 'width'> {
    position: Strategy;
}

export interface IPositionStatus {
    visible: boolean;
    show: boolean;
    onChange: (status?: any) => void
}

export function usePosition(): [
    (node: ReferenceType) => void,
    (node: HTMLElement) => void,
    {
        reference: React.MutableRefObject<ReferenceType>;
        floating: React.MutableRefObject<HTMLElement>;
    }, IPosition, IPositionStatus] {
    const { refs, reference, floating, strategy, update, x, y } = useFloating({
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [offset(8), shift(), flip()],
    });
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

    const onChange = useCallback((status?: boolean) => {
        if (!isUndefined(status) && isBoolean(status)) return setShow(status);
        if (!visible) { setVisible(true); } else {
            setShow(!show);
        }
    }, [visible, show]);

    useEffect(() => {
        if (!refs.reference || !refs.reference.current) return;
        window.addEventListener('scroll', update);
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [refs.reference.current, update]);

    useRenderEffect(() => {
        if (visible) {
            setShow(true);
        }
    }, [visible]);
    return [reference, floating, refs, {
        position: strategy,
        top: y ?? 0,
        left: x ?? 0,
        width: refs.reference?.current?.getBoundingClientRect().width ?? 0,
    }, { show, visible, onChange }];
}