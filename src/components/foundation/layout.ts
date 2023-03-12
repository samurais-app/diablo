import { ThemeWithProps } from '@ui/index';
import { LayoutContentProps } from 'components/interfaces/layout';

export function layoutNavShow(props: ThemeWithProps<LayoutContentProps>) {
  const { theme } = props;
  return theme.mobile ? 'none' : 'block';
}

export function layoutNavMargin(props: ThemeWithProps<LayoutContentProps>) {
  return `${props.theme.Size(props.header)}${props.theme.unit}`;
}

export function layoutNavWidth(props: ThemeWithProps<LayoutContentProps>) {
  return `${props.theme.Size(props.navigation)}${props.theme.unit}`;
}

export function layoutNavHeight(props: ThemeWithProps<LayoutContentProps>) {
  const { header, theme } = props;

  return `calc(100vh - ${theme.Size(header)}${theme.unit})`;
}

export function mainContentWidth(props: ThemeWithProps<LayoutContentProps>) {
  const { navigation, outline, theme } = props;
  if (props.size <= 1200 && !theme.mobile) {
    return `calc(100vw - ${theme.Size(Number(navigation))}${theme.unit})`;
  }
  return theme.mobile ? '100vw' : `calc(100vw - ${theme.Size(Number(navigation) + Number(outline))}${theme.unit})`;
}

export function mainContentTop(props: ThemeWithProps<LayoutContentProps>) {
  const { theme, header } = props;

  return `${theme.Size(Number(header))}${theme.unit}`;
}

export function mainContentMargin(props: ThemeWithProps<LayoutContentProps>) {
  const { navigation, outline, theme } = props;
  if (props.size <= 1200 && !theme.mobile) {
    return `0 0 0 ${theme.Size(Number(navigation))}${theme.unit}`;
  }
  return theme.mobile ? 0 : `0 ${theme.Size(Number(outline))}${theme.unit} 0 ${theme.Size(Number(navigation))}${theme.unit}`;
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

export function docNavigationShow(props: ThemeWithProps<LayoutContentProps>) {
  const { theme } = props;
  return theme.mobile || props.size <= 1200 ? 'none' : 'block';
}

export function docNavigationWidth(props: ThemeWithProps<LayoutContentProps>) {
  return `${props.theme.Size(props.outline)}${props.theme.unit}`;
}