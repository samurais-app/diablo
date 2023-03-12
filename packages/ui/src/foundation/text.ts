import { color } from '@diabol/tool';
import { getTheme, ITitleProps, ThemeWithProps } from '..';


export function titleColor(props: ThemeWithProps<Omit<ITitleProps, 'type'>>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.1, true)}`;
}