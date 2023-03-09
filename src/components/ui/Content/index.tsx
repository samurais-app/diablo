import { ContentBox } from 'components/styled/content';
import React from 'react';


type Props = {
  children: JSX.Element;
}
export default function Content(props: Props) {
  return (
    <ContentBox>{props.children}</ContentBox>
  );
}