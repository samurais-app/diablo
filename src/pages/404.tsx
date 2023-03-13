import Empty404 from 'components/404';
import { IEmptyPageProps } from 'components/interfaces/404';
import React from 'react';


export default function Empty(props: IEmptyPageProps) {
  return (<Empty404 {...props}>1</Empty404>);
}