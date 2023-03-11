import { Script } from 'gatsby';
import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <Script src="//at.alicdn.com/t/c/font_3495102_qadv92zfhjl.js" />
      {element}
    </Layout>
  );
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  console.log('Gatsby started to change location to', location.pathname);
  console.log('Gatsby started to change location from', prevLocation ? prevLocation.pathname : null);
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    return false;
  }

  return true;
};