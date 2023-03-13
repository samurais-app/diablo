import React from 'react';

export type INavigationItemBaseProps = {
  path?: string;
  depth?: number;
  title: string;
  children?: React.ReactElement<INavigationItemBaseProps> | React.ReactElement<INavigationItemBaseProps>[];
}

export type INavigationItemProps = {
  path?: string;
  title: string;
  children: React.ReactElement<INavigationItemProps> | React.ReactElement<INavigationItemProps>[];
}

export type INavigationProps = {
  path?: string;
  children: React.ReactElement<INavigationItemBaseProps> | React.ReactElement<INavigationItemBaseProps>[]
}
