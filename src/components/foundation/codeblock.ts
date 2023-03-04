import { ThemeWithProps } from '@ui/index';


export function codeViewBorder(props: ThemeWithProps<object>) {
  return `1px solid ${props.theme.color.border}`;
}