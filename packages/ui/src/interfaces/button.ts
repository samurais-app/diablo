import { Size } from '@/interfaces';
import { ThemedStyledProps } from 'styled-components';
import { Theme } from '@/interfaces';

export enum borderRadiusSize {
    small = 14,
    middle = 18,
    large = 24
}

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: keyof typeof Size;
}


export type ThemeWithButtonBaseProps = ThemedStyledProps<ButtonBaseProps, Theme>;