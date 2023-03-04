import React from 'react';
import { ApiTableBox } from 'components/styled/apitable';


export default function ApiTable({ children }) {
  return (
    <ApiTableBox>
      {children}
    </ApiTableBox>
  );
}