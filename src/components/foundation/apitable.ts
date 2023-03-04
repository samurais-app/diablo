import { ThemeWithProps } from '@ui/index';

// 
export function apiTableBorder(props: ThemeWithProps<object>) {
  return `${props.theme.color.border}`;
}

export function apiTableColor(props: ThemeWithProps<object>) {
  return `${props.theme.color.text}`;
}