import { isArray } from '@diabol/tool';
import { IHeaderBaseProps } from '@ui/interfaces';
import React, { isValidElement, useMemo } from 'react';
import { HeaderActions } from './styled';

type ActionsProps = {
  children: IHeaderBaseProps['actions']
}

/**
 * 头部操作
 * @param param0 
 * @returns 
 */
export function Actions({ children }: ActionsProps) {
  const nodes: JSX.Element[] = useMemo(() => (isArray(children) ? children : [children]).filter(isValidElement), [children]);

  if (nodes.length <= 1) {
    return (
      <HeaderActions>{nodes}</HeaderActions>
    );
  }
  return (
    <HeaderActions>
      {nodes}
    </HeaderActions>
  );
}