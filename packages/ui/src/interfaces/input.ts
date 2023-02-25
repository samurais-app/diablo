import { FieldProps, Size } from '@/interfaces';
import { Theme } from '@/interfaces';
import { ThemedStyledProps } from 'styled-components';

export type InputType = 'text' | 'number' | 'password'

export interface InputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'onChange'>, FieldProps {
    type?: InputType;
    size?: keyof typeof Size;
    error?: any
}

export type ThemeWithInputBaseProps = ThemedStyledProps<InputBaseProps, Theme>;