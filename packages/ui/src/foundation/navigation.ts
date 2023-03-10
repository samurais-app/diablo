import { getTheme, INavigationItemBaseProps, ThemeWithProps } from '..';


export function navUlSpacing(props: ThemeWithProps<Pick<INavigationItemBaseProps, 'depth'>>) {
  const { Size, spacing, unit } = getTheme(props);
  return `${Size(spacing.padding[2])}${unit}`;
}