import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        h1: {
            fontFamily: `stolzl, roboto, arial, sans-serif`,
        },
        h2: {
            fontFamily: `stolzl, roboto, arial, sans-serif`,
        },
        h3: {
            fontFamily: `stolzl, roboto, arial, sans-serif`,
        },
        h4: {
            fontFamily: `stolzl, roboto, arial, sans-serif`,
        },
        h5: {
            fontFamily: `stolzl, roboto, arial, sans-serif`,
        },
        h6: {
            fontFamily: `stolzl, roboto, arial, sans-serif`,
        },
    },
});

const RootWrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default RootWrapper;

RootWrapper.propTypes = {
    children: PropTypes.any,
};
