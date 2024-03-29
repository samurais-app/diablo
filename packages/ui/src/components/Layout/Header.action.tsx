import { isArray } from '@diabol/tool';
import { IHeaderBaseProps } from '@ui/interfaces';
import React, { isValidElement } from 'react';
import { HeaderActions } from './styled';

type ActionsProps = {
  isMobile?: boolean;
  children: IHeaderBaseProps['actions']
}

/**
 * 头部操作
 * @param param0 
 * @returns 
 */
export function Actions({ children }: ActionsProps) {
  const nodes: JSX.Element[] = (isArray(children) ? children : [children]).filter(isValidElement);
  return (
    <HeaderActions>{nodes}</HeaderActions>
  );
  // if (nodes.length <= 1 || !isMobile) {
  //   return (
  //     <HeaderActions>{nodes}</HeaderActions>
  //   );
  // }
  // return (
  //   <HeaderActions>
  //     <ActionContent>
  //       {nodes.slice(0, nodes.length - 1)}
  //     </ActionContent>
  //     <ActionButton>{nodes[nodes.length - 1]}</ActionButton>
  //   </HeaderActions>
  // );
}