import { BaseProps } from './common';

export type ButtonType = 'primary' | 'link' | 'dashed';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';

export type IButtonCommon = {
  type: ButtonType;
  htmlType: ButtonHtmlType;
  loading?: boolean;
  disabled?: boolean;
  children?: JSX.Element | string
};

export type IButtonBoxCommonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  type: ButtonHtmlType;
  htmlType: ButtonType;
  disabled?: boolean;
  children?: any
};

export type IButtonBoxProps = BaseProps<IButtonBoxCommonProps>;
export type IButtonProps = BaseProps<IButtonCommon>