/* eslint-disable indent */
import { ThemeWithAvatarBaseProps } from 'src/interfaces';
import { defaultThemeConfig } from '@/components/Theme';


export function avatarBorderRadius(props: ThemeWithAvatarBaseProps) {
    return props.circular ? '50%' : `${props.theme.spacing.radius[1]}px`;
}

export function avatarSize(props: ThemeWithAvatarBaseProps) {
    return `${props.size}px`;
}

export function avatarTextMarginLeft(props: ThemeWithAvatarBaseProps) {
    const theme = props?.theme ?? defaultThemeConfig;
    return `${theme.Size(theme.spacing.spacing[1])}${theme.unit}`;
}