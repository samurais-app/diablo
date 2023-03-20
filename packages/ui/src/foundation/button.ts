import { color } from '@diabol/tool';
import { IButtonBoxProps, IButtonCommon, ThemeWithProps } from '@ui/interfaces';
import { mergeThemeToFoundation } from '@ui/components/Theme';

export const buttonTextColor = mergeThemeToFoundation(({
  theme
}: ThemeWithProps<IButtonBoxProps>) => {
  return `${theme.color.text}`;
});

export const buttonPadding = mergeThemeToFoundation(({ theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { Unit, spacing } = theme;
  return `${Unit(spacing.padding[0])} ${Unit(spacing.padding[2])}`;
});

export const buttonBg = mergeThemeToFoundation(({ theme }: ThemeWithProps<IButtonBoxProps>) => {
  return `${theme.color.primary}`;
});

export const buttonActiveBg = mergeThemeToFoundation(({ theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { color: { primary } } = theme;
  return `${color(primary, 0.8, false)}`;
});

export const buttonHoverBg = mergeThemeToFoundation(({ theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { color: { primary } } = theme;
  return `${color(primary, 0.1, false)}`;
});

export const borderRadius = mergeThemeToFoundation(({ theme }: ThemeWithProps<IButtonBoxProps>) => {
  if (!theme.borderRadius) return 0;
  return `${theme.Unit(theme.spacing.radius[2])}`;
});

export const buttonBorder = mergeThemeToFoundation(({ border, theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { Unit, color } = theme;
  return border ? `${Unit(1)} solid ${color.border}` : 'none';
});

export const buttonLoadingMargin = mergeThemeToFoundation(({ theme }: ThemeWithProps<Pick<IButtonCommon, 'loading'>>) => {
  return `${theme.Unit(theme.spacing.spacing[2])}`;
});

export const buttonLoadingWidth = mergeThemeToFoundation(({ theme }: ThemeWithProps<Pick<IButtonCommon, 'loading'>>) => {
  return `${theme.Unit(25)}`;
});

export const buttonLoadingHeight = mergeThemeToFoundation(({ theme }: ThemeWithProps<Pick<IButtonCommon, 'loading'>>) => {
  return `${theme.Unit(15)}`;
});