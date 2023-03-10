/* eslint-disable indent */
import { completionHex, opacity } from '@frade-sam/samtools';
import { IAppBarBaseProps, ThemeWithProps } from '@ui/interfaces';
import { getTheme } from '@ui/components/Theme';


export function padding(props: ThemeWithProps<IAppBarBaseProps>) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.padding[1])}${theme.unit} ${theme.Size(theme.spacing.padding[4])}${theme.unit}`;
}

export function fixed(props: IAppBarBaseProps) {
    return props.fixed ? 'fixed' : '';
}

export function appBarBlur(props: IAppBarBaseProps) {
    return props.transparent ? 'blur(12px)' : 'blur(0px)';
}

export function appBarBackground(props: ThemeWithProps<IAppBarBaseProps>) {
    const theme = getTheme(props);
    if (props.transparent) return opacity(completionHex(theme.color.background), 0.01);
    return props.background ? props.background : 'transparent';
}

export function navigationPadding(props: ThemeWithProps<IAppBarBaseProps>) {
    const theme = getTheme(props);
    return `0${theme.unit} ${theme.Size(theme.spacing.padding[1])}${theme.unit}`;
}