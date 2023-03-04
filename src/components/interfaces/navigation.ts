import { ReactElement } from 'react';


export type NavigationProps = {
  fold?: boolean; // 是否允许折叠
  children?: ReactElement<NavigationItemProps>[] | ReactElement<NavigationItemProps>[];
}

export type NavigationItemProps = {
  path: string;
  label?: JSX.Element | string;
  children?: ReactElement<NavigationItemProps>[] | ReactElement<NavigationItemProps>;
}