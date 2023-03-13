import { getTheme, ThemeWithProps } from '@ui/index';
import { IEmptyPageProps } from 'components/interfaces/404';
import { LayoutContentProps } from 'components/interfaces/layout';

export function layoutHeight(props: ThemeWithProps<IEmptyPageProps>) {
  const theme = getTheme(props);
  return `calc(100vh - ${theme.Size(props.top)}${theme.unit})`;
}


export function layoutNavPadding(props: ThemeWithProps<LayoutContentProps>) {
  const { Size, unit, spacing } = getTheme(props);
  const padding1 = Size(spacing.spacing[2] * 2);
  const padding2 = Size(spacing.spacing[4] * 4);
  return `${padding1}${unit} ${padding1}${unit} ${padding1}${unit} ${padding2}${unit}`;
}

export function layoutNavBg(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  const { color } = theme;
  return `radial-gradient(transparent 1px, ${color.background} 1px)`;
}


export function layoutNavShow(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  return theme.mobile ? 'none' : 'block';
}

export function layoutNavMargin(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.header)}${theme.unit}`;
}

export function layoutNavWidth(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.navigation)}${theme.unit}`;
}

export function layoutNavHeight(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  const { header } = props;
  return `calc(100vh - ${theme.Size(header)}${theme.unit})`;
}

export function layoutNavTranslate(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  console.log(theme, props);
  return `translate(${theme.mobile || !props.showNavigation ? -theme.Size(props.navigation) : 0}${theme.unit},0)`;
}


// 内容样式
export function mainContentWidth(props: ThemeWithProps<LayoutContentProps>) {
  const theme = getTheme(props);
  const { navigation, outline } = props;
  if (props.size <= 1200 && !theme.mobile) {
    return `calc(100vw - ${theme.Size(Number(navigation))}${theme.unit})`;
  }
  return theme.mobile ? '100vw' : `calc(100vw - ${theme.Size(Number(navigation) + Number(outline))}${theme.unit})`;
}

export function mainContentTop(props: ThemeWithProps<LayoutContentProps>) {
  const { header } = props;
  const theme = getTheme(props);

  return `${theme.Size(Number(header))}${theme.unit}`;
}

export function mainContentMargin(props: ThemeWithProps<LayoutContentProps>) {
  const { navigation, outline } = props;
  const theme = getTheme(props);
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


export function logoBoxMargin(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.spacing[1])}${theme.unit}`;
}