import PropTypes from 'prop-types';
import React from 'react';
import { GlobalStyled, Layout } from './styled/layout';


type Props = {
  type: string;
  location: any;
  children: React.ReactElement;
}

export default function AppLayout({ type, location, children }: Props) {
  console.log(type, location);
  return (<Layout><GlobalStyled />{children}</Layout>);
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
