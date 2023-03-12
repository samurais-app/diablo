/* eslint-disable indent */
import { color, completionHex, opacity } from '@diabol/tool';
import { Size } from '@ui/interfaces';
import { getTheme } from '@ui/components/Theme';
import { ThemeWithAnyProps, ThemeWithMenuBaseProps, ThemeWithMenuItemBaseProps } from '@ui/interfaces';

export function menuRadius(props: ThemeWithMenuBaseProps | ThemeWithMenuItemBaseProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function menuBackgroundColor(num: number) {
    return function (props: ThemeWithMenuBaseProps | ThemeWithMenuItemBaseProps) {
        const theme = getTheme(props);
        return color(theme.color.background, num);
    };
}

export function menuBoxShadow(props: ThemeWithMenuBaseProps | ThemeWithMenuItemBaseProps) {
    const theme = getTheme(props);
    return `0px 0px 10px 2px ${color(theme.color.background, 0.03, true)}`;
}

export function menuItemPadding(props: ThemeWithMenuItemBaseProps) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function menuItemBackground(type?: 'hover' | 'active') {
    return function (props: ThemeWithMenuItemBaseProps) {
        const theme = getTheme(props);
        if (!type || !props.background) return theme.color.transparent;
        if (type === 'hover') return opacity(completionHex(theme.color.primary), 0.05);
        return opacity(completionHex(theme.color.primary), 0.1);
    };
}


export function menuFontSize(scale = 0) {
    return function (props: ThemeWithAnyProps) {
        const theme = getTheme(props);
        return `${theme.Size(theme.spacing.fontSize[Size[props.size]] - scale)}${theme.unit}`;
    };
}