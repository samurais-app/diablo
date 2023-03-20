/* eslint-disable @typescript-eslint/naming-convention */
import { ThemedStyledProps } from 'styled-components';

export type ThemeMode = 'dark' | 'light';

export interface ThemeColor {
  primary?: string;
  background?: string;
  transparent?: string;
  error?: string;
  border?: string;
  text?: string;
  active?: ThemeColor;
  hover?: ThemeColor;
  focus?: ThemeColor;
}

type Size = (num: number) => number;
type Unit = (num: number) => string;

export interface ThemeSpacing {
  fontSize?: [number, number, number, number, number],
  radius?: [number, number, number, number, number],
  spacing?: [number, number, number, number, number],
  padding?: [number, number, number, number, number]
}

export interface Theme {
  mode?: ThemeMode;
  size?: number;
  mobile?: boolean;
  unit?: 'rem' | 'px';
  Size?: Size;
  Unit?: Unit;
  borderRadius?: boolean;
  color?: ThemeColor;
  spacing?: ThemeSpacing;
  animation?: number;
  transition?: string;
}

export type IThemeConfig = Record<ThemeMode, Theme>;
export type IThemeProps = Record<ThemeMode, Omit<Theme, 'Size' | 'unit' | 'mobile'>>;

export type ThemeWithAnyProps<P = any> = ThemedStyledProps<P, Theme>;