import React from 'react';
import { Document } from './src/components';


export const wrapPageElement = ({ element, props }) => {
  return (<Document {...props}>{element}</Document>);
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