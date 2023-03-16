import { color } from '@tools/index';
import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';

export function titleColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.1, true)}`;
}

export function titleFontSize(props: ThemeWithProps<object>) {
  const { Unit } = getTheme(props);
  return Unit(26);
}

export function titleInfoFontSize(props: ThemeWithProps<object>) {
  const { Unit } = getTheme(props);
  return Unit(16);
}