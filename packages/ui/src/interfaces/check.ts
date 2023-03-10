import { IFieldProps, Size } from '@ui/interfaces';
import { Theme } from '@ui/interfaces';
import { ThemedStyledProps } from 'styled-components';


export interface ICheckBaseProps extends IFieldProps {
    [key: string]: any;
    active?: boolean;
    size: keyof typeof Size
}

export interface ICheckGroupBaseProps extends IFieldProps, Omit<React.InputHTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
    multiple?: boolean
}

export type ThemeWithCheckBaseProps = ThemedStyledProps<ICheckBaseProps, Theme>

export type ThemeWithCheckGroupBaseProps = ThemedStyledProps<ICheckGroupBaseProps, Theme>