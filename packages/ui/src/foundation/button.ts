/* eslint-disable indent */
import { color } from '@frade-sam/samtools';
import { Size } from '@ui/interfaces';
import { defaultConfig } from '@ui/components/Theme';
import { ThemeWithButtonBaseProps } from '@ui/interfaces';

export function backgroundColor(num?: number) {
    return function (props: ThemeWithButtonBaseProps) {
        const theme = props.theme ?? defaultConfig;
        return theme.color.primary ? color(theme.color.primary, num) : theme.color.transparent;
    };
}

export function buttonPadding(props: ThemeWithButtonBaseProps) {
    const theme = props.theme ?? defaultConfig;
    const pad: Record<keyof typeof Size, string> = {
        small: `${theme.spacing.padding[0]}px ${theme.spacing.padding[2]}px`,
        middle: `${theme.spacing.padding[1]}px ${theme.spacing.padding[3]}px`,
        large: `${theme.spacing.padding[2]}px ${theme.spacing.padding[4]}px`,
    };

    return `${pad[props.size]}`;
}


export function buttonBorderRadius(props: ThemeWithButtonBaseProps) {
    const theme = props.theme ?? defaultConfig;
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[1])}${theme.unit}`;
}