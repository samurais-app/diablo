/* eslint-disable indent */
import { IAvatarBaseProps, ThemeWithProps } from '@ui/interfaces';
import { getTheme } from '@ui/components/Theme';


export function avatarBorderRadius(props: ThemeWithProps<Pick<IAvatarBaseProps, 'circular' | 'size'>>) {
    return props.circular ? '50%' : `${props.theme.spacing.radius[1]}px`;
}

export function avatarSize(props: ThemeWithProps<Pick<IAvatarBaseProps, 'circular' | 'size'>>) {
    return `${props.size}px`;
}

export function avatarTextMarginLeft(props: ThemeWithProps<Pick<IAvatarBaseProps, 'circular' | 'size'>>) {
    const theme = getTheme(props);
    return `${theme.Size(theme.spacing.spacing[1])}${theme.unit}`;
}