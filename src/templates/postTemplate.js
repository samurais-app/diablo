import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash.get';
import { components } from './nodes';
import { Remarkable } from 'remarkable';
import { Content } from 'components';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'styled-components';


const Title = styled.div`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  letter-spacing: 0.02em;
`;
const TinyTitle = styled.div`
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  margin: 16px 0 24px 0;
`;

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer({ components });

export default function PostTemplate(args) {
  const { data } = args;
  const { current } = data;
  const category = get(data, 'current.frontmatter.category', '');
  const title = get(data, 'current.frontmatter.title', '');
  const name = get(data, 'current.fields.name', '');
  return (
    <Content>
      <Title>{`${category}·${name}`}</Title>
      <TinyTitle>{title}</TinyTitle>
      {md.render(current.body)}
    </Content>
  );
}

export const query = graphql`
  query($slug: String) {
    current: mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        order
        brief
        icon
        category
      }
      fields {
        type
        name
      }
      tableOfContents
      body
    }
  }
`;