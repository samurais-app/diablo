/* eslint-disable indent */
import { complementaryColor, completionHex, opacity } from '@diabol/tool';
import { getTheme } from '@ui/components/Theme';
import { ThemeWithOptionBaseProps, ThemeWithOptionBoxBaseProps, ThemeWithSelectBaseProps, ThemeWithAnyProps, Size } from '@ui/interfaces';

export function selectPadding(props: ThemeWithSelectBaseProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function selectBorderRadius(props: ThemeWithSelectBaseProps) {
    const theme = getTheme(props);
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function selectBorder(props: ThemeWithSelectBaseProps) {
    const theme = getTheme(props);
    return props.error ? theme.color.error : theme.color.transparent;
}

export function selectFontSize(props: ThemeWithAnyProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.fontSize[Size[props.size]])}${theme.unit}`;
}

export function optionPadding(props: ThemeWithOptionBaseProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function optionBoxBorderRadius(props: ThemeWithOptionBoxBaseProps) {
    const theme = getTheme(props);
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function optionBoxShow(props: ThemeWithOptionBoxBaseProps) {
    const theme = getTheme(props);
    return opacity(complementaryColor(theme.color.background), 0.05);
}

export function optionBackground(type?: 'hover' | 'active') {
    return function (props: ThemeWithOptionBaseProps) {
        const theme = getTheme(props);
        if (!type) return theme.color.transparent;
        if (type === 'hover') return opacity(completionHex(theme.color.primary), 0.05);
        return opacity(completionHex(theme.color.primary), 0.1);
    };
}

export function selectBgColor(props: ThemeWithSelectBaseProps) {
    const theme = getTheme(props);
    return opacity(complementaryColor(theme.color.background), 0.05);
}