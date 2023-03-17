import { IFieldProps, BaseProps } from '@ui/interfaces';

type IInputCommon = Omit<React.InputHTMLAttributes<HTMLInputElement>, FilterAttrs>;

export type InputType = 'text' | 'number' | 'password' | 'search'
export type FilterAttrs = 'size' | 'type' | 'value' | 'onChange' | 'max' | 'min' | 'prefix' | 'suffix';



export interface IInputBaseProps extends IInputCommon, IFieldProps {
    type?: InputType;
    prefix?: JSX.Element | string;
    suffix?: JSX.Element | string;
}

export interface IInputTextProps extends BaseProps<IInputBaseProps> {
    maxLength?: number;
}

export interface IInputNumberProps extends BaseProps<IInputBaseProps> {
    max?: number;
}

export type IInputProps = IInputTextProps | IInputNumberProps;