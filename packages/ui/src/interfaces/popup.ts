
export type IPopupProps = {
  width?: number | string;
  className?: string;
  open?: boolean;
  close?: boolean;
  onClonse?: () => void;
  children?: JSX.Element;
};

export type PopupAction = {
  open: () => void;
  close: () => void;
}

