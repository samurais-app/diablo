import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';
import { IContentProps } from 'components/interfaces/content';


export function contentPadding(props: ThemeWithProps<IContentProps>) {
  const { theme, width } = props;
  const { Size, spacing, size, unit } = getTheme(props);
  if (width <= 1200 && !theme.mobile) {
    const padding1 = theme.Size(theme.spacing.spacing[2] * 4);
    const padding2 = theme.Size(theme.spacing.spacing[4] * 4);
    return `${padding1}${theme.unit} ${padding2}${theme.unit}`;
  }

  if (width >= 1400) {
    const padding3 = theme.Size(theme.spacing.spacing[1] * 4);
    const padding4 = theme.Size(theme.spacing.spacing[3] * 4);
    return `${padding3}${theme.unit} ${padding4}${theme.unit} ${padding4}${theme.unit} ${padding4}${theme.unit}`;
  }
  const padding1 = theme.Size(theme.spacing.spacing[2]);
  const padding2 = theme.Size(theme.spacing.spacing[4]);
  const padding3 = theme.Size(theme.spacing.spacing[1] * 8);
  const padding4 = theme.Size(theme.spacing.spacing[3] * 8);
  return theme.mobile ?
    `${padding1}${theme.unit} ${padding2}${theme.unit} ${padding2}${theme.unit} ${padding2}${theme.unit}` :
    `${padding3}${theme.unit} ${padding4}${theme.unit} ${padding4}${theme.unit} ${padding4}${theme.unit}`;
}