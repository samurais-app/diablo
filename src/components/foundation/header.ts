import { ThemeWithProps } from '@ui/interfaces';


export function headerBgImage(props: ThemeWithProps<object>) {
  const { color } = props.theme;
  return `radial-gradient(transparent 1px, ${color.background} 1px)`;
}