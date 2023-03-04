import React from 'react';

export type INavigationItemProps = {
  path: string;
  children: JSX.Element | string;
}

export type INavigationProps = {
  path?: string;
  children: React.ReactElement<INavigationItemProps> | React.ReactElement<INavigationItemProps>[]
}