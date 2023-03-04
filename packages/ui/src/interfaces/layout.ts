import { ThemedStyledProps } from 'styled-components';
import { Theme } from './theme';


export interface IHeaderBaseProps {
  logo?: JSX.Element | string;
  height?: number;
  children?: JSX.Element | string;
  actions?: JSX.Element | JSX.Element[];
}

export type ThemeWithHeaderBaseProps = ThemedStyledProps<IHeaderBaseProps, Theme>