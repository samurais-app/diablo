import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { components } from './nodes';
import { Remarkable } from 'remarkable';
import { Content } from 'components';
import { itemsArr } from 'site/utils/category';
import { Title, TinyTitle } from 'components/styled/template';
import RemarkableReactRenderer from 'remarkable-react';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer({ components });

export default function PostTemplate(args) {
  const { data } = args;
  const { current } = data;
  const category = itemsArr.find((item) => item.itemKey === get(data, 'current.frontmatter.category', ''));
  const title = get(data, 'current.frontmatter.title', '');
  const name = get(data, 'current.fields.name', '');

  return (
      <Content>
        <Title>{`${category?.text}·${name}`}</Title>
        <TinyTitle>{title}</TinyTitle>
        {md.render(current.body)}
      </Content>
  );
}

export const query = graphql`
  query($slug: String) {
    allMdx(
        filter: { fields: { type: { nin: ["principles", "concepts"] } } }
        sort: { order: ASC, fields: [fields___typeOrder, fields___slug] }
    ) {
        edges {
            node {
                fields {
                    type
                    slug
                }
                frontmatter {
                    title
                    localeCode
                    icon
                    category
                    order
                }
            }
        }
    }
    site {
        siteMetadata {
            title
            github
        }
    }
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