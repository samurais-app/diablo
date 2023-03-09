import { BaseProps } from './common';


export type SwitchProps = BaseProps<{
  value?: boolean;
  onChange?: (status: boolean) => void;
}>