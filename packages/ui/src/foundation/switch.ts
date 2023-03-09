import deepmerge from 'deepmerge';
import { complementaryColor, opacity } from '@frade-sam/samtools';
import { defaultTheme, SwitchProps, ThemeWithProps } from '..';

export type SwitchBaseOption = ThemeWithProps<Omit<SwitchProps, 'onChange'>>;
export type SwitchIconBase = ThemeWithProps<Pick<SwitchProps, 'size' | 'value'>>;
enum SWITCH_WIDTH {
  small = 40,
  middle = 60,
  large = 80
}

enum SWITCH_HEIGHT {
  small = 18,
  middle = 24,
  large = 30
}

const SPACING = 2;

export function switchWidth(props: SwitchBaseOption) {
  const { size = 'small' } = props;
  const theme = deepmerge(props?.theme, defaultTheme);

  return `${theme.Size(SWITCH_WIDTH[size])}${theme.unit}`;
}

export function switchHeight(props: SwitchBaseOption) {
  const { size = 'small' } = props;
  const theme = deepmerge(props?.theme, defaultTheme);

  return `${theme.Size(SWITCH_HEIGHT[size])}${theme.unit}`;
}

export function switchBorderRadius(props: SwitchBaseOption) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(999)}${theme.unit}`;
}

export function switchBorder(props: SwitchBaseOption) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(1)}${theme.unit} solid ${opacity(theme.color.border, 0.5)}`;
}

export function switchBg(props: SwitchIconBase) {
  const theme = deepmerge(defaultTheme, props?.theme);
  return `${opacity(complementaryColor(theme.color.text), 0.2)}`;
}

export function switchBtnSize(props: SwitchIconBase) {
  const { size = 'small' } = props;
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(SWITCH_HEIGHT[size] - SPACING * 2)}${theme.unit}`;
}

export function switchBtnBorderRadius(props: SwitchIconBase) {
  const { size = 'small' } = props;
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size((SWITCH_HEIGHT[size] - SPACING * 2) / 2)}${theme.unit}`;
}

export function switchBtnBg(props: SwitchIconBase) {
  const theme = deepmerge(defaultTheme, props?.theme);
  console.log(props.theme, defaultTheme);
  return `${theme.color.background}`;
}

export function switchBtnTop(props: SwitchIconBase) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(SPACING)}${theme.unit}`;
}

export function switchBtnLeft(props: SwitchIconBase) {
  const { value, size } = props;
  const theme = deepmerge(props?.theme, defaultTheme);
  const iconWidth = SWITCH_HEIGHT[size] - SPACING * 2;
  console.log(value, '???');
  return !value ? `${theme.Size(SPACING)}${theme.unit}` : `${theme.Size(SWITCH_WIDTH[size] - iconWidth - SPACING)}${theme.unit}`;
}

export function switchFontSize(props: SwitchBaseOption) {
  const theme = deepmerge(props?.theme, defaultTheme);
  return `${theme.Size(theme.size)}${theme.unit}`;
}