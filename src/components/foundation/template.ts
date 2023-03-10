import { color } from '@frade-sam/samtools';
import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';

export function titleColor(props: ThemeWithProps<object>) {
  const theme = getTheme(props);
  return `${color(theme.color.text, 0.1, true)}`;
}