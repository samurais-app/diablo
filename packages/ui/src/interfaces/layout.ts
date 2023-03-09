import { ThemedStyledProps } from 'styled-components';
import { Theme } from './theme';


export interface IHeaderBaseProps {
  logo?: JSX.Element | JSX.Element[] | string;
  height?: number;
  float?: boolean
  children?: JSX.Element | JSX.Element[] | string;
  actions?: JSX.Element | JSX.Element[];
}

export type ThemeWithHeaderBaseProps = ThemedStyledProps<Omit<IHeaderBaseProps, 'children'>, Theme>