import { color, opacity, complementaryColor } from '@diabol/tool';
import { getTheme, ThemeWithProps, INavigationBoxProps, INavigationLinkProps, INavigationChildProps } from '..';


export function navUlSpacing(props: ThemeWithProps<INavigationBoxProps>) {
  const { Size, spacing, unit } = getTheme(props);
  return `${Size(spacing.padding[2])}${unit}`;
}

export function navUlPaddingLeft(props: ThemeWithProps<INavigationChildProps>) {
  const { depth } = props;
  if (!depth) return 0;
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.padding[1] * depth)}${theme.unit}`;
}

export function navUlHeight(props: ThemeWithProps<INavigationChildProps>) {
  const { depth, active } = props;
  if (!depth) return 'auto';
  return active ? 'auto' : 0;
}

export function navUlRotateX(props: ThemeWithProps<INavigationBoxProps>) {
  const { depth, active } = props;
  if (!depth) return 0;
  return active ? 0 : 90;
}

export function navLiLinkColor(props: ThemeWithProps<INavigationLinkProps>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.1, true)}`;
}

export function navLiLinkBorderRadius(props: ThemeWithProps<INavigationLinkProps>) {
  const theme = getTheme(props);
  if (!theme.borderRadius) return 0;
  return `${theme.Size(theme.spacing.radius[2])}${theme.unit}`;
}

export function navLiLinkBg(props: ThemeWithProps<INavigationLinkProps>) {
  const theme = getTheme(props);
  return `${opacity(complementaryColor(theme.color.background), 0.05)}`;
}

export function navLiLinkActiveBg(props: ThemeWithProps<INavigationLinkProps>) {
  const theme = getTheme(props);
  return `${props.active ? opacity(complementaryColor(theme.color.background), 0.1) : theme.color.transparent}`;
}


export function navLiLinkVisitedColor(props: ThemeWithProps<INavigationLinkProps>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.2, true)}`;
}

export function navLiPadding(props: ThemeWithProps<INavigationLinkProps>) {
  const { spacing, Size, unit } = getTheme(props);
  return `${Size(spacing.padding[0])}${unit} ${Size(spacing.padding[2])}${unit}`;
}