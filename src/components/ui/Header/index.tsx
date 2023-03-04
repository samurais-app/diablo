import React from 'react';
import { IHeaderBaseProps, Layout } from '@ui/index';

export default function Header({ children, ...props }: IHeaderBaseProps) {
  return (
    <Layout.Header {...props}>{children}</Layout.Header>
  );
}