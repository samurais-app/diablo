/* eslint-disable indent */
import { color, completionHex, opacity } from '@frade-sam/samtools';
import { Size } from '@ui/interfaces';
import { defaultTheme } from '@ui/components/Theme';
import { ThemeWithAnyProps, ThemeWithMenuBaseProps, ThemeWithMenuItemBaseProps } from '@ui/interfaces';

export function menuRadius(props: ThemeWithMenuBaseProps | ThemeWithMenuItemBaseProps) {
    const theme = props?.theme ?? defaultTheme;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function menuBackgroundColor(num: number) {
    return function (props: ThemeWithMenuBaseProps | ThemeWithMenuItemBaseProps) {
        const theme = props?.theme ?? defaultTheme;
        return color(theme.color.background, num);
    };
}

export function menuBoxShadow(props: ThemeWithMenuBaseProps | ThemeWithMenuItemBaseProps) {
    const theme = props?.theme ?? defaultTheme;
    return `0px 0px 10px 2px ${color(theme.color.background, 0.03, true)}`;
}

export function menuItemPadding(props: ThemeWithMenuItemBaseProps) {
    const theme = props.theme ?? defaultTheme;
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function menuItemBackground(type?: 'hover' | 'active') {
    return function (props: ThemeWithMenuItemBaseProps) {
        const theme = props.theme ?? defaultTheme;
        if (!type || !props.background) return theme.color.transparent;
        if (type === 'hover') return opacity(completionHex(theme.color.primary), 0.05);
        return opacity(completionHex(theme.color.primary), 0.1);
    };
}


export function menuFontSize(scale = 0) {
    return function (props: ThemeWithAnyProps) {
        const theme = props.theme ?? defaultTheme;
        return `${theme.Size(theme.spacing.fontSize[Size[props.size]] - scale)}${theme.unit}`;
    };
}