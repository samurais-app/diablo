export type ITextProps = {
  /** 文本类型 */
  type: TextType;
  /** 是否支持copy */
  copy?: boolean;
  edit?: boolean;
  children?: string;
}
export type ITitleProps = {
  type: TitleType,
  children?: string;
}


export type TextType = 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'disabled'
export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';