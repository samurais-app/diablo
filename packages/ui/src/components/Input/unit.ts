/* eslint-disable @typescript-eslint/no-unused-vars */
import { isEmpty } from '@diabol/tool';
import { IInputProps, InputType } from '@ui/interfaces';
import { InputNumber } from './InputNumber';
import { InputText } from './InputText';
import { InputSearch } from './InputSearch';

function changeText(event: React.ChangeEvent<HTMLInputElement>, props: IInputProps) {
  if (props.maxLength && event.target.value.length > props.maxLength) {
    event.target.value = props.value as unknown as string;
  }
}

function changeNumber(event: React.ChangeEvent<HTMLInputElement>, _props: IInputProps) {
  if (!/(^[\-0-9][0-9]*(\.[0-9]+|\.)?)$/.test(event.target.value)) {
    event.target.value = '';
    return;
  }
}

export function getInputChange(type: InputType) {
  switch (type) {
    case 'number':
      return changeNumber;
    default:
      return changeText;
  }
}

export function getInputComponent(type: InputType): any {
  switch (type) {
    case 'number':
      return InputNumber;
    case 'search':
      return InputSearch;
    default:
      return InputText;
  }
}

export function transform(type: InputType, event: React.ChangeEvent<HTMLInputElement>) {
  if (type === 'number') {
    return isEmpty(event.target.value) ? undefined : Number(event.target.value);
  }
  return event.target.value;
}
