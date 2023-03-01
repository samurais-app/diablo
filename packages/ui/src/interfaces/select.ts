import { Strategy } from '@floating-ui/react-dom';
import { ThemedStyledProps } from 'styled-components';
import { FieldProps, Size } from '@ui/interfaces';
import { Theme } from '@ui/interfaces';
export interface IOption {
    name: string;
    key?: string | number;
    value: string | number | any;
}

export interface ISearchParams {
    page?: number;
    size?: number;
    search?: string;
};

export interface ISelectBaseProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'>, FieldProps {
    options?: IOption[];
    multiple?: boolean;
    size?: keyof typeof Size;
    error?: string;
    fetch?: (params: ISearchParams) => Promise<IOption[]>
}

export interface IOptionBoxBaseProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'size' | 'width' | 'position' | 'top' | 'left' | 'onChange'> {
    show?: boolean;
    value?: string | number;
    width: number;
    position: Strategy;
    top: number;
    left: number;
    size?: keyof typeof Size;
}


export interface IOptionBaseProps {
    size?: keyof typeof Size;
    isActive?: boolean;
    key?: any;
    value: string | number;
}

export type ThemeWithSelectBaseProps = ThemedStyledProps<ISelectBaseProps, Theme>;

export type ThemeWithOptionBaseProps = ThemedStyledProps<IOptionBaseProps, Theme>;

export type ThemeWithOptionBoxBaseProps = ThemedStyledProps<IOptionBoxBaseProps, Theme>;