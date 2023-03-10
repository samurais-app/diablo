import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash.get';
import { components } from './nodes';
import { Remarkable } from 'remarkable';
import { Content } from 'components';
import { Title, TinyTitle } from 'components/styled/template';
import RemarkableReactRenderer from 'remarkable-react';

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