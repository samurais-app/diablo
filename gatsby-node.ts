import path from 'path';
import webpack from 'webpack';
const getLocale = path => {
  const pathname = path || window.location.pathname;
  let locale = 'zh-CN';
  if (/en-US/.test(pathname)) {
    locale = 'en-US';
  }
  return locale;
};

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      global: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: path.resolve(__dirname, './scripts/process.js')
      })
    ],
    resolve: {
      alias: {
        '@ui': path.resolve(__dirname, './packages/ui/src'),
        '@tools': path.resolve(__dirname, './packages/tools/src'),
        '@hooks': path.resolve(__dirname, './packages/hooks/src'),
        'components': path.resolve(__dirname, './src/components'),
        'config': path.resolve(__dirname, './src/config'),
        chalk: path.resolve(__dirname, './scripts/chalk.js'),
        process: path.resolve(__dirname, './scripts/process.js'),
      },
      fallback: {
        assert: false,
        fs: false,
        os: false,
        module: false,
        path: path.resolve(__dirname, './node_modules/path-browserify'),
      },
    }
  });
};

export const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const items = ['basic', 'chart'];
  if (node.internal.type === 'Mdx') {
    const mdxNode = getNode(node.parent);
    const levels = mdxNode.relativePath.split(path.sep);

    const locale = getLocale(mdxNode.name);
    createNodeField({
      node,
      name: 'slug',
      value: `${levels[0]}/${levels[1]}`, // eg: zh-CN/chart/area
    });

    createNodeField({
      node,
      name: 'absolutePath',
      value: mdxNode.absolutePath
    });
    createNodeField({
      node,
      name: 'name',
      value: `${levels[1]}`,
    });
    createNodeField({
      node,
      name: 'type',
      value: `${levels[0]}`,
    });

    createNodeField({
      node,
      name: 'typeOrder',
      value: items.indexOf(levels[0]),
    });

    createNodeField({
      node,
      name: 'locale',
      value: locale,
    });
  }
};

// export const onPreBootstrap = () => {
//   const orderFunc = require('./scripts/order');
//   console.log('starting order mdx');
//   orderFunc();
// };

export const createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/postTemplate.js');

  const result = await graphql(`
    query {
      allMdx(sort: {frontmatter: {order: ASC}}) {
        edges {
          previous {
            fields {
              slug
            }
            id
            frontmatter {
              icon
              localeCode
              title
            }
          }
          node {
            id
            fields {
              slug
              absolutePath
            }
            frontmatter {
              icon
              title
              localeCode
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              icon
              localeCode
              title
            }
            id
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMdx.edges.forEach(({ next, previous, node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        absolutePath: node.fields.absolutePath,
        next,
        previous,
        id: node.id,
      },
    });
  });
};
