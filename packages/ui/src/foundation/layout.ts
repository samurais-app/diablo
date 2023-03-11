import { isNum, opacity } from '@frade-sam/samtools';
import { getTheme, ThemeWithHeaderBaseProps } from '..';


export function headerPadding(props: ThemeWithHeaderBaseProps) {
  const theme = getTheme(props);
  return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[2])}${theme.unit}`;
}

export function headerBorder(props: ThemeWithHeaderBaseProps) {
  const theme = getTheme(props);
  return opacity(theme.color.border, 0.3);
}

export function headerHeight(props: ThemeWithHeaderBaseProps) {
  const theme = getTheme(props);
  return isNum(props.height) ? `${theme.Size(props.height)}${theme.unit}` : 'auto';
}

export function headerPosition(props: ThemeWithHeaderBaseProps) {
  const { float } = props;
  return float ? 'fixed' : 'unset';
}

