import { ElementType } from 'react';
import { SizeType } from './common';

export type OutlineItem = {
  title: string;
  url: string;
  children: OutlineItem[];
}

export type IOutlineItemProps = {
  title: string;
  url: string;
  children?: ElementType<IOutlineItemProps>[] | ElementType<IOutlineItemProps>;
}

export type IOutlineProps = {
  size?: SizeType;
  options: OutlineItem[];
  children?: ElementType<IOutlineItemProps>[] | ElementType<IOutlineItemProps>;
}
