/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from 'react';
import { IInputProps } from '@ui/interfaces';
import { getInputChange, getInputComponent, transform } from './unit';
import { isFunction } from '@diabol/tool';

export default function Input(props: IInputProps) {
  const {
    type = 'text',
    onChange,
    ..._props
  } = props;
  const Com = getInputComponent(type);
  console.log(type, Com);
  const _onChange = useCallback((event) => {
    const func = getInputChange(type);
    func(event, props);
    if (isFunction(onChange)) onChange(transform(type, event));
  }, [type]);
  const inputProps = type === 'password' ? { ..._props, type } : _props;
  return <Com onChange={_onChange} {...inputProps} />;
}