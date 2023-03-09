import { useSize } from '@hooks/index';
import { ContentBox } from 'components/styled/content';
import React from 'react';


type Props = {
  children: JSX.Element;
}
export default function Content(props: Props) {
  const { width } = useSize(document.body);
  return (
    <ContentBox width={width}>{props.children}</ContentBox>
  );
}