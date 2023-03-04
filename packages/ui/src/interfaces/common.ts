import { ThemedStyledProps } from 'styled-components';
import { Theme } from './theme';

export type ThemeWithProps<T> = ThemedStyledProps<T, Theme>;