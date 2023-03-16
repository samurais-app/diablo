import { IInputBaseProps } from '@ui/interfaces';
import React from 'react';
import { useCallback } from 'react';
import { InputContainerStyled, InputStyled } from './input.styled';

export interface IInputSearchProps extends IInputBaseProps {
  type?: 'search';
};

export function InputSearch(props: IInputSearchProps) {
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