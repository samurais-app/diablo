import { ThemeWithProps } from '@ui/interfaces';
import { IOutlineItemProps, IOutlineProps } from 'components/interfaces/outline';


export function outlineUlMargin(props: ThemeWithProps<IOutlineProps>) {
  const { isChild } = props;
  return isChild ? `${props.theme.Size(props.theme.spacing.spacing[1])}${props.theme.unit}` : 0;
}
export function outlineUlPadding(props: ThemeWithProps<IOutlineProps>) {
  const { isChild } = props;
  return isChild ? 0 : `${props.theme.Size(props.theme.spacing.spacing[0])}${props.theme.unit}`;
}

export function outlineUlTagShow(props: ThemeWithProps<IOutlineProps>) {
  const { isChild } = props;
  return isChild ? 'none' : 'block';
}

export function outlineUlTagWidth(props: ThemeWithProps<IOutlineProps>) {
  const { theme } = props;
  return `${theme.Size(theme.spacing.spacing[0])}${theme.unit}`;
}

export function outlineUlTagHeight(props: ThemeWithProps<IOutlineProps>) {
  const { theme, itemHeight } = props;
  return `${theme.Size(itemHeight)}${theme.unit}`;
}

export function outlineUlTagTop(props: ThemeWithProps<IOutlineProps>) {
  const { theme, itemHeight, index } = props;
  return `${theme.Size(itemHeight * index)}${theme.unit}`;
}

export function outlineUlTagColor(props: ThemeWithProps<IOutlineProps>) {
  const { theme } = props;
  return theme.color.primary;
}

export function outlineUlTagRadius(props: ThemeWithProps<IOutlineProps>) {
  const { theme } = props;
  return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function outlineLiPadding(props: ThemeWithProps<Omit<IOutlineItemProps, 'index'>>) {
  const { theme } = props;
  return `0 ${theme.Size(theme.spacing.spacing[2])}${theme.unit}`;
}

export function outlineLinkSize(props: ThemeWithProps<object>) {
  const { theme: { spacing: { fontSize }, unit } } = props;
  return `${props.theme.Size(fontSize[0])}${unit}`;
}