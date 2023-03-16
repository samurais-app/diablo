import { color } from '@diabol/tool';
import { getTheme, ITextProps, ITitleProps, ThemeWithProps } from '..';


export function titleColor(props: ThemeWithProps<Omit<ITitleProps, 'type'>>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.1, true)}`;
}

export function textColor(props: ThemeWithProps<ITextProps>) {
  const theme = getTheme(props);
  return theme.color.text;
}