/* eslint-disable indent */
import { complementaryColor, opacity } from '@frade-sam/samtools';
import { Size, ThemeWithInputBaseProps } from '@ui/interfaces';
import { defaultConfig } from '@ui/components/Theme';
import deepmerge from 'deepmerge';

export function inputBorder(props: ThemeWithInputBaseProps) {
    const theme = deepmerge(props?.theme, defaultConfig);
    const color = props.error ? theme.color.error : props.border ? theme.color.border : theme.color.transparent;
    return `1px solid ${color}`;
}

export function inputPadding(props: ThemeWithInputBaseProps) {
    const theme = deepmerge(props?.theme, defaultConfig);
    return `${theme.Size(theme.spacing.padding[0])}${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}

export function inputFontSize(props: ThemeWithInputBaseProps) {
    const theme = deepmerge(props?.theme, defaultConfig);
    return `${theme.Size(theme.spacing.fontSize[Size[props.size]])}${theme.unit}`;
}

export function inputBorderRadius(props?: ThemeWithInputBaseProps) {
    const theme = deepmerge(props?.theme, defaultConfig);
    if (!theme.borderRadius) return 0;
    return `${theme.Size(theme.spacing.radius[0])}${theme.unit}`;
}

export function inputBgColor(props?: ThemeWithInputBaseProps) {
    const theme = deepmerge(props?.theme, defaultConfig);
    return props.border ? 'none' : opacity(complementaryColor(theme.color.background), 0.05);
}

export function inputActiveBorder(props?: ThemeWithInputBaseProps) {
    const theme = deepmerge(props?.theme, defaultConfig);

    return;
}