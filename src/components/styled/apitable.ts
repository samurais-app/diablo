import styled from 'styled-components';
import { apiTableBorder, apiTableColor } from 'components/foundation/apitable';


export const ApiTableBox = styled.div`
  width: 100%;
  overflow: auto !important;
  box-sizing: border-box;
  font-family: "JetBrains Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  & table {
    border-collapse: collapse;
  }
  & th, & td {
    padding: 15px 15px;
    text-align: left;
    border-bottom: 1px solid ${apiTableBorder};
    white-space: nowrap;
    color: ${apiTableColor};
  }
`;

export const TableBox = styled.table`
  min-width: 100%;
`;