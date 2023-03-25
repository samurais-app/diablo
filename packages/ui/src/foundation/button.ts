import { complementaryColor } from '@diabol/tool';
import { color } from '@diabol/tool';
import { IButtonBoxCommonProps, IButtonBoxProps, IButtonCommon, ThemeWithProps } from '@ui/interfaces';
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


// 背景颜色
export const buttonBg = mergeThemeToFoundation(({ disabled, htmlType, theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { color: { primary, transparent } } = theme;
  if (disabled) {
    return color(primary, 0.2, true);
  }
  if (htmlType === 'link') {
    return transparent;
  }
  return `${primary}`;
});

export const buttonActiveBg = mergeThemeToFoundation(({ disabled, htmlType, theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { color: { primary, transparent } } = theme;
  if (disabled) {
    return color(primary, 0.2, true);
  }
  if (htmlType === 'link') {
    return transparent;
  }
  return `${color(primary, 0.8, false)}`;
});

export const buttonHoverBg = mergeThemeToFoundation(({ disabled, htmlType, theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { color: { primary, transparent } } = theme;
  if (disabled) {
    return color(primary, 0.2, true);
  }
  if (htmlType === 'link') {
    return transparent;
  }
  return disabled ? color(theme.color.primary, 0.2, true) : `${color(primary, 0.1, false)}`;
});

export const borderRadius = mergeThemeToFoundation(({ theme }: ThemeWithProps<IButtonBoxProps>) => {
  if (!theme.borderRadius) return 0;
  return `${theme.Unit(theme.spacing.radius[2])}`;
});

export const buttonBorder = mergeThemeToFoundation(({ border, theme }: ThemeWithProps<IButtonBoxProps>) => {
  const { Unit, color } = theme;

  return border ? `${Unit(1)} solid ${color.border}` : 'none';
});


export const buttonLoadingSize = mergeThemeToFoundation(({ theme }: ThemeWithProps<Pick<IButtonCommon, 'loading'>>) => {
  return `${theme.Unit(12)}`;
});

export const buttonCursor = mergeThemeToFoundation(({ disabled }: ThemeWithProps<IButtonBoxCommonProps>) => {
  return disabled ? 'no-drop' : 'pointer';
});

export const buttonColor = mergeThemeToFoundation(({ htmlType, theme }: ThemeWithProps<IButtonBoxProps>) => {
  if (htmlType === 'link') {
    return theme.color.text;
  }
  return complementaryColor(theme.color.text);
});