import { BaseProps } from './common';
import { Theme } from './theme';

export type IPopupProps = BaseProps<{
  width?: number | string;
  className?: string;
  open?: boolean;
  close?: boolean;
  onClonse?: () => void;
  children?: JSX.Element;
} & { theme: Theme }>;

export type IPopupUpdateProps = Pick<IPopupProps, 'border' | 'close' | 'size' | 'width'>

export type PopupAction = {
  open: () => void;
  close: () => void;
  update: (props: IPopupUpdateProps) => void;
}

