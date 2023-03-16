import { complementaryColor } from '@diabol/tool';
import { isString } from '@diabol/tool';
import { getTheme, IconProps, ThemeWithProps } from '..';


export function iconSize(props: ThemeWithProps<IconProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.size ?? theme.size)}${theme.unit}`;
}

export function iconColor(props: ThemeWithProps<IconProps>) {
  const theme = getTheme(props);
  return isString(props.color) ? props.color : complementaryColor(theme.color.background);
}