import React from 'react';
import { IEmptyPageProps } from './interfaces/404';
import { EmptyBox } from './styled/404';


export default function Empty404(props: IEmptyPageProps) {
  return (
    <EmptyBox {...props}>
      1
    </EmptyBox>
  );
}