import { color } from '@diabol/tool';
import { getTheme, INavigationItemBaseProps, ThemeWithProps, INavigationItemProps } from '..';


export function navUlSpacing(props: ThemeWithProps<Pick<INavigationItemBaseProps, 'depth'>>) {
  const { Size, spacing, unit } = getTheme(props);
  return `${Size(spacing.padding[2])}${unit}`;
}

export function navLiLinkColor(props: ThemeWithProps<INavigationItemProps>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.1, true)}`;
}

export function navLiLinkVisitedColor(props: ThemeWithProps<INavigationItemProps>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.2, true)}`;
}

export function navLiPadding(props: ThemeWithProps<INavigationItemProps>) {
  const { spacing, Size, unit } = getTheme(props);
  return `${Size(spacing.padding[0])}${unit} ${Size(spacing.padding[2])}${unit}`;
}