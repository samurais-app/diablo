import { ThemeWithProps } from '@ui/interfaces';


export function contentPadding(props: ThemeWithProps<object>) {
  const { theme } = props;
  return theme.mobile ? `${theme.Size(theme.spacing.spacing[2])}${theme.unit} ${theme.Size(theme.spacing.spacing[4])}${theme.unit}` : `${theme.Size(theme.spacing.spacing[1] * 10)}${theme.unit} ${theme.Size(theme.spacing.spacing[3] * 10)}${theme.unit}`;
}