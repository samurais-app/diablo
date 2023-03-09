import { ThemedStyledProps } from 'styled-components';
import { Size } from './enums';
import { Theme } from './theme';

export type ThemeWithProps<T> = ThemedStyledProps<T, Theme>;

export type BaseProps<P> = P & {
  size?: keyof typeof Size;
} 