import { SwitchProps, ThemeWithProps } from '..';

enum SWITCH_WIDTH {
  small = 80,
  middle = 100,
  large = 120
}

export function switchWidth(props: ThemeWithProps<Omit<SwitchProps, 'onChange'>>) {
  const { size } = props;

  return SWITCH_WIDTH[size];
}