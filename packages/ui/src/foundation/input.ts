/* eslint-disable indent */
import { complementaryColor, opacity } from '@diabol/tool';
import { Size, ThemeWithInputBaseProps } from '@ui/interfaces';
import { getTheme } from '@ui/components/Theme';

export function inputBorder(props: ThemeWithInputBaseProps) {
    const theme = getTheme(props);
    const color = props.error ? theme.color.error : props.border ? opacity(theme.color.border, 0.5) : theme.color.transparent;
    return `1px solid ${color}`;
}

export function inputPadding(props: ThemeWithInputBaseProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function inputFontSize(props: ThemeWithInputBaseProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.fontSize[Size[props.size]])}${theme.unit}`;
}

export function inputBorderRadius(props?: ThemeWithInputBaseProps) {
    const theme = getTheme(props);
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function inputBgColor(props?: ThemeWithInputBaseProps) {
    const theme = getTheme(props);
    return props.border ? 'none' : opacity(complementaryColor(theme.color.background), 0.05);
}

export function inputActiveBorder(props?: ThemeWithInputBaseProps) {
    const theme = getTheme(props);

    return;
}

export function inputCaretColor(props: ThemeWithInputBaseProps) {
    const theme = getTheme(props);
    return `${complementaryColor(theme.color.background)}`;
}