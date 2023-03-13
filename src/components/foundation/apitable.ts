import { opacity } from '@tools/index';
import { getTheme, ThemeWithProps } from '@ui/index';

// 
export function apiTableBorder(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${opacity(theme.color.border, 0.3)}`;
}

export function apiTableColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.color.text}`;
}