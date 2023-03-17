/* eslint-disable indent */
import React, { useCallback } from 'react';
import { InputStyled, InputContainerStyled } from './input.styled';
import { IInputProps } from '@ui/interfaces';

export function InputText(props: IInputProps) {
    const {
        size = 'small',
        error,
        onChange,
        border,
        prefix,
        suffix,
        ..._props
    } = props;
    const _change = useCallback((event) => {
        if (typeof onChange !== 'function') return;
        if (props.maxLength && event.target.value.length > props.maxLength) {
            event.target.value = props.value as unknown as string;
        }
        onChange(event);
    }, [_props.value]);

    return (
        <InputContainerStyled size={size} error={error} border={border}>
            <InputStyled onChange={_change} {..._props} />
        </InputContainerStyled>
    );
}