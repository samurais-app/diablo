import { BaseProps } from './common';


export type SwitchProps = BaseProps<{
  value?: boolean;
  active?: string;
  inactive?: string;
  className?: string;
  onChange?: (status: boolean) => void;
  activeIcon?: JSX.Element;
  inactiveIcon?: JSX.Element;
}>