import { complementaryColor, isString, opacity } from '@diabol/tool';
import { getTheme, IPopupProps, ThemeWithProps } from '..';
import { mergeThemeToFoundation } from '@ui/components/Theme';

export function popupContainerShow(props: ThemeWithProps<Omit<IPopupProps, 'children'>>) {
  return props.open ? 'block' : 'none';
}

export function popupWidth(props: ThemeWithProps<IPopupProps>) {
  const { width = 400 } = props;
  const theme = getTheme(props);
  const wid = isString(width) ? width : `${theme.Size(width)}${theme.unit}`;
  return wid;
}

export function popupBaseBg(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return opacity(complementaryColor(theme.color.background), 0.1);
}

export function popupBoxBg(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return theme.color.background;
}

export const popupBoxPadding = mergeThemeToFoundation(({ theme }: ThemeWithProps<IPopupProps>) => {
  return `${theme.Unit(theme.spacing.padding[3])}`;
});

export const popupCloseSpacing = mergeThemeToFoundation(({ theme }: ThemeWithProps<IPopupProps>) => {
  return `${theme.Unit(theme.spacing.spacing[1])}`;
});

export function popupCloseShow(props: ThemeWithProps<IPopupProps>) {
  return props.close ? 'inline-block' : 'none';
}

export function popupClosePadding(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.padding[0] * 0.5)}${theme.unit}`;
}

export function popupBoxShadow(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return `0px 0px 60px 4px ${opacity(theme.color.background, 0.1)},
             -0px -0px 60px 4px ${opacity(complementaryColor(theme.color.background), 0.05)}`;
}

export function popupBoxBorderRadius(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.radius[3])}${theme.unit}`;
}