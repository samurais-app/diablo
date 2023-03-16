import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';
import { IDocumentContentProps, IDocumentLayoutProps, IDocumentNavigationProps, IDocumentOutlineProps } from 'components/interfaces';

export function logoBoxMargin(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.spacing[1])}${theme.unit}`;
}



export function docLayoutHeight(props: ThemeWithProps<IDocumentLayoutProps>) {
  const theme = getTheme(props);
  return `calc(100vh - ${theme.Size(props.top)}${theme.unit})`;
}

export function docLayoutTop(props: ThemeWithProps<IDocumentLayoutProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.top)}${theme.unit}`;
}


// 导航栏
export function docNavigationPadding(props: ThemeWithProps<IDocumentNavigationProps>) {
  const { Size, unit, mobile, spacing } = getTheme(props);
  const { size } = props;
  if (mobile) {
    const padding1 = Size(spacing.spacing[2] * 2);
    const padding2 = Size(spacing.spacing[4] * 2);
    return `${padding1}${unit} ${padding2}${unit} ${padding1}${unit} ${padding1}${unit}`;
  }
  if (size >= 1400) {
    const padding1 = Size(spacing.spacing[2] * 3);
    const padding2 = Size(spacing.spacing[4] * ((size * 9) / 1200));
    return `${padding1}${unit} 0${unit} ${padding1}${unit} ${padding2}${unit}`;
  }
  const padding1 = Size(spacing.spacing[2] * 3);
  const padding2 = Size(spacing.spacing[4] * 4);
  return `${padding1}${unit} ${padding1}${unit} ${padding1}${unit} ${padding2}${unit}`;
}

export function docNavigationTop(props: ThemeWithProps<IDocumentNavigationProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.top)}${theme.unit}`;
}

export function docNavigationWidth(props: ThemeWithProps<IDocumentNavigationProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.width)}${theme.unit}`;
}

export function docNavigationHeight(props: ThemeWithProps<IDocumentNavigationProps>) {
  const theme = getTheme(props);
  const { top } = props;
  return `calc(100vh - ${theme.Size(top)}${theme.unit})`;
}

export function docNavigationBg(props: ThemeWithProps<IDocumentNavigationProps>) {
  const theme = getTheme(props);
  const { color } = theme;
  return `radial-gradient(transparent 1px, ${color.background} 1px)`;
}

export function docNavigationTranslate(props: ThemeWithProps<IDocumentNavigationProps>) {
  const theme = getTheme(props);
  return `translate(${theme.mobile && !props.show ? -theme.Size(props.width) : 0}${theme.unit},0)`;
}


// 内容样式
export function docContentWidth(props: ThemeWithProps<IDocumentContentProps>) {
  const { Size, unit, mobile, spacing } = getTheme(props);
  const { size, left, right } = props;
  if (!props.showNavigation && !props.showOutline) return '100vw';
  if (props.size <= 1200 && !mobile) {
    return `calc(100vw - ${Size(Number(left))}${unit})`;
  }
  if (props.size >= 1400) {
    const _left = spacing.spacing[4] * ((size * 9) / 1200) + left;
    const _right = spacing.spacing[4] * ((size * 10) / 1200) + right;
    return `calc(100vw - ${Size(Number(_left) + Number(_right))}${unit})`;
  }
  return mobile ? '100vw' : `calc(100vw - ${Size(Number(left) + Number(right))}${unit})`;
}

export function docContentMargin(props: ThemeWithProps<IDocumentContentProps>) {
  const { left, right, size } = props;
  const { Size, unit, mobile, spacing } = getTheme(props);
  if (!props.showNavigation && !props.showOutline) return '0';
  if (props.size <= 1200 && !mobile) {
    return `0 0 0 ${Size(Number(left))}${unit}`;
  }
  if (props.size >= 1400) {
    const _left = spacing.spacing[4] * ((size * 9) / 1200) + left;
    const _right = spacing.spacing[4] * ((size * 10) / 1200);
    return `0 ${Size(Number(_right))}${unit} 0 ${Size(Number(_left))}${unit}`;
  }
  return mobile ? 0 : `0 ${Size(Number(right))}${unit} 0 ${Size(Number(left))}${unit}`;
}

export function docContentPaddingTop(props: ThemeWithProps<IDocumentContentProps>) {
  const { top } = props;
  const theme = getTheme(props);

  return `${theme.Size(Number(top))}${theme.unit}`;
}


// 大纲

export function docOutlineTranslate(props: ThemeWithProps<IDocumentOutlineProps>) {
  const theme = getTheme(props);
  return `translate(${theme.mobile || !props.show || props.size <= 1200 ? theme.Size(props.width) : 0}${theme.unit},0)`;
}

export function docOutlinePadding(props: ThemeWithProps<IDocumentOutlineProps>) {
  const { Size, unit, spacing } = getTheme(props);
  const { size } = props;
  if (size >= 1400) {
    const padding1 = Size(spacing.padding[4]);
    const padding2 = Size(spacing.spacing[4] * ((size * 10) / 1200));
    return `${padding1}${unit} ${padding2}${unit} ${padding1}${unit} 0${unit}`;
  }
  return `${Size(spacing.padding[4])}${unit} 0`;
}