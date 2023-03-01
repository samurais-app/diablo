import { Size } from '@ui/interfaces';
import { ThemedStyledProps } from 'styled-components';
import { Theme } from '@ui/interfaces';

export enum borderRadiusSize {
    small = 14,
    middle = 18,
    large = 24
}

export interface IButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: keyof typeof Size;
}


export type ThemeWithButtonBaseProps = ThemedStyledProps<IButtonBaseProps, Theme>;