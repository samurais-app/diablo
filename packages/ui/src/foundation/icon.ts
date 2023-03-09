import { IconProps, ThemeWithProps } from '..';


export function iconSize(props: ThemeWithProps<IconProps>) {
  const { theme: { size, Size, unit } } = props;
  return `${Size(size)}${unit}`;
}