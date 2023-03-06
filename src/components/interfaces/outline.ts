import { ThemeWithProps } from '@ui/interfaces';
import { ReactElement } from 'react';


export type IOutlineProps = {
  isChild?: boolean;
  height?: number;
  itemHeight?: number;
  index?: number;
  children: ReactElement<IOutlineItemProps> | ReactElement<IOutlineItemProps>[];
}

export type IOutlineItemProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  index: number;
  path: string;
  title: string;
  children?: ReactElement<IOutlineItemProps> | ReactElement<IOutlineItemProps>[] | JSX.Element[];
}

export type IOutlineLinkProps = ThemeWithProps<object>;