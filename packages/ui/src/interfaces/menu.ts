import { FieldProps, Size } from '@ui/interfaces';
import { Theme } from '@ui/interfaces';
import { ThemedStyledProps } from 'styled-components';


export interface IMenuBaseProps extends Omit<React.InputHTMLAttributes<HTMLUListElement>, 'value' | 'onChange' | 'size'>, Omit<FieldProps, 'error'> {
  size?: keyof typeof Size
}

export interface IMenuItemBaseProps extends Omit<React.InputHTMLAttributes<HTMLLIElement>, 'value' | 'onChange' | 'size'> {
  size?: keyof typeof Size;
  background?: boolean;
}

export type ThemeWithMenuBaseProps = ThemedStyledProps<IMenuBaseProps, Theme>;
export type ThemeWithMenuItemBaseProps = ThemedStyledProps<IMenuItemBaseProps, Theme>;