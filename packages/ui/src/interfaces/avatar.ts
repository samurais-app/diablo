import { ThemedStyledProps } from 'styled-components';
import { Theme } from '@ui/interfaces';


export interface IAvatarBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    size?: number;
    circular?: boolean;
    ellipsis?: boolean;
}

export type ThemeWithAvatarBaseProps = ThemedStyledProps<Pick<IAvatarBaseProps, 'circular' | 'size'>, Theme>