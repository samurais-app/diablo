import deepmerge from 'deepmerge';
import { defaultTheme, IconProps, ThemeWithProps } from '..';


export function iconSize(props: ThemeWithProps<IconProps>) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(props.size ?? theme.size)}${theme.unit}`;
}