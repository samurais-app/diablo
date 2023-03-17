import { ThemedStyledProps } from 'styled-components';
import { Size } from './enums';
import { Theme } from './theme';

export type ThemeWithProps<T> = ThemedStyledProps<T, Theme>;

export type BaseProps<P> = P & {
  size?: SizeType;
  border?: boolean;
}

export type SizeType = keyof typeof Size;

export type BaseComponentProps = {
  size?: SizeType;
  border?: boolean;
}