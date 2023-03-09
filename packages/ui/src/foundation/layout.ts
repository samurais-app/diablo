import { isNum } from '@frade-sam/samtools';
import deepmerge from 'deepmerge';
import { defaultTheme, ThemeWithHeaderBaseProps } from '..';


export function headerPadding(props: ThemeWithHeaderBaseProps) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[2])}${theme.unit}`;
}

export function headerBorder(props: ThemeWithHeaderBaseProps) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return theme.color.border;
}

export function headerHeight(props: ThemeWithHeaderBaseProps) {
  const theme = deepmerge(props?.theme, defaultTheme);

  return isNum(props.height) ? `${theme.Size(props.height)}${theme.unit}` : 'auto';
}

export function headerPosition(props: ThemeWithHeaderBaseProps) {
  const { float } = props;
  return float ? 'fixed' : 'unset';
}

