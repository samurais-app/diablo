import { IInputProps } from '@ui/interfaces';
import React from 'react';
import { useCallback } from 'react';
import Icon from '../Icon';
import { InputContainerStyled, InputPrefix, InputStyled, InputSuffix } from './input.styled';


export function InputSearch(props: Omit<IInputProps, 'suffix'>) {
  const {
    size = 'small',
    error,
    onChange,
    border,
    prefix,
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
      {prefix ? <InputPrefix>{prefix}</InputPrefix> : null}
      <InputStyled onChange={_change} {..._props} />
      <InputSuffix><Icon type="icon-search" size={16} /></InputSuffix>
    </InputContainerStyled>
  );
}