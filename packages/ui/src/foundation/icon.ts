import { getTheme, IconProps, ThemeWithProps } from '..';


export function iconSize(props: ThemeWithProps<IconProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.size ?? theme.size)}${theme.unit}`;
}