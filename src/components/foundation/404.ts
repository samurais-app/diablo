import { getTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';
import { IEmptyPageProps } from 'components/interfaces/404';


export function emptyBoxTop(props: ThemeWithProps<IEmptyPageProps>) {
  const theme = getTheme(props);
  return `${theme.Size(props.top)}${theme.unit}`;
}

export function emptyBoxBg(props: ThemeWithProps<IEmptyPageProps>) {
  const theme = getTheme(props);
  return `${theme.color.background}`;
}