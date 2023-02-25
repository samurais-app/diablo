/* eslint-disable indent */
import { complementaryColor, opacity } from '@frade-sam/samtools';
import { Size, ThemeWithInputBaseProps } from '@/interfaces';
import { defaultThemeConfig } from '@/components/Theme';

export function inputBorder(props: ThemeWithInputBaseProps) {
    return props.error ? props.theme.color.error : props.theme.color.transparent;
}

export function inputPadding(props: ThemeWithInputBaseProps) {
    const theme = props.theme ?? defaultThemeConfig;
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function inputFontSize(props: ThemeWithInputBaseProps) {
    const theme = props.theme ?? defaultThemeConfig;
    return `${theme.Size(theme.spacing.fontSize[Size[props.size]])}${theme.unit}`;
}

export function inputBorderRadius(props?: ThemeWithInputBaseProps) {
    const theme = props?.theme ?? defaultThemeConfig;
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function inputBgColor(props?: ThemeWithInputBaseProps) {
    const theme = props?.theme ?? defaultThemeConfig;
    return opacity(complementaryColor(theme.color.background), 0.05);
}