import { isNum } from '@frade-sam/samtools';
import deepmerge from 'deepmerge';
import { defaultConfig, ThemeWithHeaderBaseProps } from '..';


export function headerPadding(props: ThemeWithHeaderBaseProps) {
  const theme = deepmerge(props?.theme, defaultConfig);
  return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[2])}${theme.unit}`;
}

export function headerBorder(props: ThemeWithHeaderBaseProps) {
  const theme = deepmerge(props?.theme, defaultConfig);
  return theme.color.border;
}

export function headerHeight(props: ThemeWithHeaderBaseProps) {
  const theme = deepmerge(props?.theme, defaultConfig);

  return isNum(props.height) ? `${theme.Size(props.height)}${theme.unit}` : 'auto';
}

