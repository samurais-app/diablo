import { isEmpty } from '@tools/index';
import { defaultTheme } from '@ui/index';
import { ThemeWithProps } from '@ui/interfaces';


export function headerBgImage(props: ThemeWithProps<object>) {
  const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
  const { color } = theme;
  return `radial-gradient(transparent 1px, ${color.background} 1px)`;
}