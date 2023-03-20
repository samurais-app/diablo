import { BaseProps } from './common';

export type ButtonType = 'primary' | 'link' | 'disabled';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';

export type IButtonCommon = {
  type: ButtonType;
  htmlType: ButtonHtmlType;
  loading?: boolean;
  children?: JSX.Element | string
};

export type IButtonBoxCommonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  type: ButtonHtmlType;
  htmlType: ButtonType;
  children?: any
};

export type IButtonBoxProps = BaseProps<IButtonBoxCommonProps>;
export type IButtonProps = BaseProps<IButtonCommon>