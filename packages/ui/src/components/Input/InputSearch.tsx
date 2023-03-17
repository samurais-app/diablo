import { IInputProps } from '@ui/interfaces';
import React from 'react';
import { useCallback } from 'react';
import { InputContainerStyled, InputStyled } from './input.styled';


export function InputSearch(props: IInputProps) {
  const {
    size = 'small',
    error,
    onChange,
    border,
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