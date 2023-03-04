import { Size, IFieldProps } from '@ui/interfaces';
import { Theme } from '@ui/interfaces';
import { ThemedStyledProps } from 'styled-components';

export type InputType = 'text' | 'number' | 'password'

export interface IInputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'onChange' | 'max' | 'min'>, IFieldProps {
    type?: InputType;
    size?: keyof typeof Size;
    border?: boolean;
}

export interface IInputTextProps extends IInputBaseProps {
    maxLength?: number;
}

export interface IInputNumberProps extends IInputBaseProps {
    max?: number;
}

export type IInputProps = IInputTextProps | IInputNumberProps;

export type ThemeWithInputBaseProps = ThemedStyledProps<IInputBaseProps, Theme>;