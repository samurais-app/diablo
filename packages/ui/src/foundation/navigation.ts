import { INavigationItemBaseProps, ThemeWithProps } from '..';


export function navUlSpacing(props: ThemeWithProps<Pick<INavigationItemBaseProps, 'depth'>>) {
  const { theme: { Size, spacing, unit } } = props;
  return `${Size(spacing.padding[2])}${unit}`;
}