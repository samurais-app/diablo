import { getTheme, ThemeWithProps } from '@ui/index';
import { color, opacity } from '@tools/index';


export function codeViewBorder(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `1px solid ${opacity(theme.color.border, 0.3)}`;
}

export function codeViewBg(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${color(theme.color.border, 1, true)}`;
}

export function previewBg(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${opacity(theme.color.background, 0.1)}`;
}

export function codeViewKeyColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.color.text}`;
}
