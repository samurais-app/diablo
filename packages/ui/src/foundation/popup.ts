import { complementaryColor, isString, opacity } from '@diabol/tool';
import { getTheme, IPopupProps, ThemeWithProps } from '..';


export function popupWidth(props: ThemeWithProps<IPopupProps>) {
  const { width = 400 } = props;
  const theme = getTheme(props);
  const wid = isString(width) ? width : `${theme.Size(width)}${theme.unit}`;
  return wid;
}

export function popupBoxBg(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return theme.color.background;
}

export function popupBoxPadding(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function popupBaseBg(props: ThemeWithProps<IPopupProps>) {
  return props.open ? 1 : 0;
}

export function popupCloseSpacing(props: ThemeWithProps<IPopupProps>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.spacing[0])}${theme.unit}`;
}

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
  return `${theme.Size(theme.spacing.radius[2])}${theme.unit}`;
}