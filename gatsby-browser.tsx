import { Script } from 'gatsby';
import { Document } from './src/components';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return (
    <React.Fragment>
      <Script src="//at.alicdn.com/t/c/font_3495102_ht86pzzvjen.js" />
      <Document {...props}>
        {element}
      </Document>
    </React.Fragment>
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