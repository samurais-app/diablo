import { ThemeWithProps } from '@ui/interfaces';
import { IContentProps } from 'components/interfaces/content';


export function contentPadding(props: ThemeWithProps<IContentProps>) {
  const { theme, width } = props;
  if (width <= 1200 && !theme.mobile) {
    return `${theme.Size(theme.spacing.spacing[2] * 4)}${theme.unit} ${theme.Size(theme.spacing.spacing[4] * 4)}${theme.unit}`;
  }
  return theme.mobile ? `${theme.Size(theme.spacing.spacing[2])}${theme.unit} ${theme.Size(theme.spacing.spacing[4])}${theme.unit}` : `${theme.Size(theme.spacing.spacing[1] * 8)}${theme.unit} ${theme.Size(theme.spacing.spacing[3] * 8)}${theme.unit}`;
}