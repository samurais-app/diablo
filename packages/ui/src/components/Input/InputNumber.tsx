/* eslint-disable indent */
import React, { useCallback } from 'react';
import { InputStyled, InputContainerStyled } from './input.styled';
import { IInputBaseProps } from '@ui/interfaces';

export interface IInputNumberProps extends IInputBaseProps {
    type?: 'number';
};

export function InputNumber(props: IInputNumberProps) {
    const {
        size = 'small',
        error,
        onChange,
        border,
        ..._props
    } = props;
    const _change = useCallback((event) => {
        if (typeof onChange !== 'function') return;
        if (!/(^[\-0-9][0-9]*(\.[0-9]+|\.)?)$/.test(event.target.value)) {
            event.target.value = '';
        }
        onChange(event);
    }, []);

    return (
        <InputContainerStyled size={size} error={error} border={border}>
            <InputStyled type="number" onChange={_change} {..._props} />
        </InputContainerStyled>
    );
}