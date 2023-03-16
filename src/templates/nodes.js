import React from 'react';
import { Text } from '@ui/index';
import { Compare,CodeBlock,ApiTable } from 'components/index';
import styled from 'styled-components';

const H2 = styled(Text.Title)`
  margin-top: 40px;
`;

export const components = {
  Compare,
  code: ({ children }) => {
    return (<CodeBlock code={children} />);
  },
  table: ApiTable,
  section: ({ children }) => {

    return <section className="markdown md anchor-section gatsby-section">{children}</section>;
  },
  h1: ({ children }) => {
    const [id] = children;
    return (<h1 id={id}>{children}</h1>);
  },
  h2: ({ children }) => {
    const [id] = children;
    return (<H2 type="h2" id={id.toLowerCase()}>{children}</H2>);
  },
  h3: ({ children }) => {
    const [id] = children;
    return (<Text.Title type="h3" id={id.toLowerCase()}>{children}</Text.Title>);
  },
  h4: ({ children }) => {
    const [id] = children;
    return (<Text.Title type='h4' id={id.toLowerCase()}>{children}</Text.Title>);
  },
  h5: ({ children }) => {
    const [id] = children;
    return (<h5 id={id}>{children}</h5>);
  },
  h6: ({ children }) => {
    const [id] = children;
    return (<h6 id={id}>{children}</h6>);
  }
};