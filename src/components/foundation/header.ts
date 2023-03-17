import { complementaryColor, hexToRgb } from '@tools/index';
import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';


export function headerBgImage(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  const { color } = theme;
  console.log('header theme', theme.mode, color.background);
  return `radial-gradient(transparent 1px, ${hexToRgb(color.background)} 1px)`;
}

export function headerPadding(props: ThemeWithProps<any>) {
  const { Size, unit, mobile, spacing } = getTheme(props);
  const { size } = props;
  if (mobile) {
    return `${Size(spacing.padding[0])}${unit} ${Size(spacing.padding[2])}${unit}`;
  }
  if (size >= 1400) {
    const padding1 = Size(spacing.padding[0]);
    const padding2 = Size(spacing.spacing[4] * ((size * 9.5) / 1200));
    return `${padding1}${unit} ${padding2}${unit} ${padding1}${unit} ${padding2}${unit}`;
  }
  const padding1 = Size(spacing.padding[0]);
  const padding2 = Size(spacing.spacing[4] * 4.5);
  return `${padding1}${unit} ${padding1}${unit} ${padding1}${unit} ${padding2}${unit}`;
}

export function headerIconColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${complementaryColor(theme.color.background)}`;
}

export function headerIconMargin(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.spacing[1])}${theme.unit}`;
}