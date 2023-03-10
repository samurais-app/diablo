import { ITextProps, ITitleProps, TitleType } from '@ui/interfaces';
import React, { FunctionComponent } from 'react';
import { H1, H2, H3, H4, H5, H6, TextBox } from './styled';

const TitleMap: Record<TitleType, FunctionComponent<Omit<ITitleProps, 'type'>>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
};

function Title({
  type = 'h3',
  children,
  ...props
}: ITitleProps) {
  const Com = TitleMap[type];
  return (<Com {...props}>{children}</Com>);
}

export default function Text({
  children,
  edit,
  ...props
}: ITextProps) {
  return (<TextBox contentEditable={edit} {...props}>{children}</TextBox>);
}

Text.Title = Title;