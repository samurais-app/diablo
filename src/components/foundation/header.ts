import { complementaryColor } from '@tools/index';
import { isEmpty } from '@tools/index';
import { defaultTheme, getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';


export function headerBgImage(props: ThemeWithProps<object>) {
  const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
  const { color } = theme;
  return `radial-gradient(transparent 1px, ${color.background} 1px)`;
}

export function headerIconColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${complementaryColor(theme.color.background)}`;
}

export function headerIconMargin(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.spacing[1])}${theme.unit}`;
}