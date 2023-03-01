import React from 'react';
import { graphql } from 'gatsby';
import Compare from 'components/Compare';
import CodeBlock from 'components/CodeBlock';
import { Remarkable } from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

const components = {
  Compare,
  code: ({children }) => {
    console.log(children);
    return (<CodeBlock code={ children}  />);
  },
  section: ({ children }) => {
    let id = '';

    if (Array.isArray(children)) {
      if (children[0].props.originalType === 'h2') {
        id = children[0] ? children[0].props.children : '';
      }
    } else {
      id = children.props.children;
    }

    return <section className="markdown md anchor-section gatsby-section">{children}</section>;
  },
  // h1: ({ children }) => {
  //   return (<h2>1</h2>);
  // },
  // h2: ({ children }) => {
  //   return (<h2>1</h2>);
  // },
  // h3: ({ children }) => {
  //   return (<h2>1</h2>);
  // }
};
const md = new Remarkable();
md.renderer = new RemarkableReactRenderer({components});

export default function PostTemplate(args) {
  const { pageContext, data, children, location } = args;
  const { current } = data;
  return (<div className="main-article">
    {md.render(current.body)}
  </div>);
}

export const query = graphql`
  query($slug: String) {
    current: mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        order
        brief
        icon
      }
      fields {
        type
      }
      tableOfContents
      body
    }
  }
`;