import React from 'react';
import { ApiTableBox, TableBox } from 'components/styled/apitable';


export default function ApiTable({ children }) {
  return (
    <ApiTableBox>
      <TableBox>
        {children}
      </TableBox>
    </ApiTableBox>
  );
}