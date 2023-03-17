/* eslint-disable indent */
import { complementaryColor, opacity } from '@diabol/tool';
import { ThemeWithProps, IInputProps } from '@ui/interfaces';
import { getTheme } from '@ui/components/Theme';
import { Size } from '@ui/interfaces/enums';

export function inputBorder(props: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    const color = props.error ? theme.color.error : props.border ? opacity(theme.color.border, 0.5) : theme.color.transparent;
    return `1px solid ${color}`;
}

export function inputPadding(props: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function inputFontSize(props: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.fontSize[Size[props.size]])}${theme.unit}`;
}

export function inputBorderRadius(props?: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function inputBgColor(props?: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    return props.border ? 'none' : opacity(complementaryColor(theme.color.background), 0.05);
}

export function inputCaretColor(props: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    return `${complementaryColor(theme.color.background)}`;
}

export function inputSuffixPrefixColor(props: ThemeWithProps<IInputProps>) {
    const { color } = getTheme(props);
    return opacity(color.text, 0.8);
}

export function inputSuffixPadding(props: ThemeWithProps<IInputProps>) {
    const { Unit, spacing } = getTheme(props);
    return `0 0 0 ${Unit(spacing.spacing[0])}`;
}

export function inputPrefixPadding(props: ThemeWithProps<IInputProps>) {
    const theme = getTheme(props);
    return `0 ${theme.Unit(theme.spacing.spacing[0])} 0 0`;
}