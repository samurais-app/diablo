import { ThemeWithProps } from '@ui/index';
import { ILayoutNavProps, IMainLayoutContentProps } from '../styled/layout';

export function layoutNavMargin(props: ThemeWithProps<ILayoutNavProps>) {
  return `${props.theme.Size(props.top)}${props.theme.unit}`;
}

export function layoutNavWidth(props: ThemeWithProps<ILayoutNavProps>) {
  return `${props.theme.Size(props.width)}${props.theme.unit}`;
}

export function layoutNavHeight(props: ThemeWithProps<ILayoutNavProps>) {
  const { top, theme } = props;

  return `calc(100vh - ${theme.Size(top)}${theme.unit})`;
}

export function layoutNavBorder(props: ThemeWithProps<ILayoutNavProps>) {
  return props.theme.color.border;
}

export function mainContentWidth(props: ThemeWithProps<IMainLayoutContentProps>) {
  const { left, right, theme } = props;
  console.log(theme);
  return theme.mobile ? '100vw' : `calc(100vw - ${theme.Size(Number(left) + Number(right))}${theme.unit})`;
}

export function mainContentTop(props: ThemeWithProps<IMainLayoutContentProps>) {
  const { theme, top } = props;

  return `${theme.Size(Number(top))}${theme.unit}`;
}

export function mainContentMargin(props: ThemeWithProps<IMainLayoutContentProps>) {
  const { left, right, theme } = props;
  return theme.mobile ? 0 : `0 ${theme.Size(Number(right))}${theme.unit} 0 ${theme.Size(Number(left))}${theme.unit}`;
}

/**
 * 导航栏边距计算
 * @param props 
 * @returns 
 */
export function docNavigationPadding(props: ThemeWithProps<object>) {
  const { theme } = props;
  return `${theme.Size(theme.spacing.padding[4])}${theme.unit} 0`;
}