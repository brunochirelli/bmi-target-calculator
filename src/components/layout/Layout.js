import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
