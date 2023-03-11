import React from 'react';
import AppLayout from './src/components/layout';


export const wrapPageElement = ({ element, props }) => {
  return (<AppLayout {...props}>{element}</AppLayout>);
};

export const onRenderBody = (body) => {
  body.setHtmlAttributes({
    lang: 'en'
  });
  body.setHeadComponents([
    <meta charSet="utf-8" key="utf-8" />,
    <meta httpEquiv="x-ua-compatible" content="ie=edge" key="edge" />,
    <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no" key="view" />,
  ]);
};

export const onPreRenderHTML = () => {
  // TODO:
};