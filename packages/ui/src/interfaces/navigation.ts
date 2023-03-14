import React from 'react';

export type INavigationItemBaseProps = {
  path?: string;
  depth?: number;
  active?: boolean;
  title: string;
  children?: React.ReactElement<INavigationItemBaseProps> | React.ReactElement<INavigationItemBaseProps>[];
}

export type INavigationItemProps = {
  path?: string;
  title?: string;
  children?: React.ReactElement<INavigationItemProps> | React.ReactElement<INavigationItemProps>[];
}

export type INavigationProps = {
  path?: string;
  onChange?: (path: string) => void;
  children: React.ReactElement<INavigationItemBaseProps> | React.ReactElement<INavigationItemBaseProps>[]
}

export type INavigationContext = {
  path?: string;
  onChange?: (path: string) => void;
}

export type INavigationLinkProps = {
  active?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export type INavigationBoxProps = Pick<INavigationItemBaseProps, 'depth' | 'active'>