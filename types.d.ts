declare module '*.svg' {
  const content: {
    url: string;
  };
  export default content;
}

type NodeField = {
  fields: {
    slug: string;
    type: string;
  },
  frontmatter: {
    category: string;
    icon: string;
    localeCode: string;
    order: string;
    title: string;
  }
}