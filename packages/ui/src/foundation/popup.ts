import { isString } from '@diabol/tool';
import { getTheme, IPopupProps, ThemeWithProps } from '..';


export function popupWidth(props: ThemeWithProps<IPopupProps>) {
  const { width = 400 } = props;
  const theme = getTheme(props);
  const wid = isString(width) ? width : `${theme.Size(width)}${theme.unit}`;
  return wid;
}

export function popupBaseBg(props: ThemeWithProps<IPopupProps>) {
  return props.open ? 1 : 0;
}