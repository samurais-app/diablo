import { useSize } from '@hooks/index';
import { isBrowser } from '@tools/dom';
import { ContentBox } from 'components/styled/content';
import React from 'react';


type Props = {
  children: JSX.Element;
}
export default function Content(props: Props) {
  const { width } = useSize(isBrowser ? document.body : undefined);
  return (
    <ContentBox width={width}>{props.children}</ContentBox>
  );
}