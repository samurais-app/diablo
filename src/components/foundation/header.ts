import { complementaryColor, hexToRgb } from '@tools/index';
import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';


export function headerBgImage(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  const { color } = theme;
  return `radial-gradient(transparent 1px, ${hexToRgb(color.background)} 1px)`;
}

export function headerPadding(props: ThemeWithProps<any>) {
  const { Unit, mobile, spacing } = getTheme(props);
  const { size } = props;
  if (mobile) {
    return `${Unit(spacing.padding[1])} ${Unit(spacing.padding[2])}`;
  }
  if (size >= 1400) {
    const padding1 = Unit(spacing.padding[1]);
    const padding2 = Unit(spacing.spacing[4] * ((size * 6.5) / 1200));
    return `${padding1} ${padding2} ${padding1} ${padding2}`;
  }
  const padding1 = Unit(spacing.padding[1]);
  const padding2 = Unit(spacing.spacing[4] * 4.5);
  return `${padding1} ${padding1} ${padding1} ${padding2}`;
}

export function headerIconColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${complementaryColor(theme.color.background)}`;
}

export function headerIconMargin(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.spacing[2])}${theme.unit}`;
}