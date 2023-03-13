import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  // flags: {
  //   DEV_SSR: true
  // },
  pathPrefix: '/',
  siteMetadata: {
    title: 'diablo',
    siteUrl: `https://www.example.com`,
    description: '通过以用户为中心、内容优先、人性化的设计系统，创建一致、美观、易于使用和高效的用户体验',
    author: 'Diablo Team',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-svgr",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-remove-serviceworker',
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-tsconfig-paths",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          { resolve: "./plugins/gatsby-mdx-render-section" }
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    }]
};

export default config;
