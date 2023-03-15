
export type IPopupProps = {
  width?: number | string;
  className?: string;
  open?: boolean;
  onChange?: (status?: boolean) => void;
  children?: JSX.Element;
};