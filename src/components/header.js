import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@material-ui/core';

const Header = ({ siteTitle }) => (
    <header>
        <Typography variant="h3" component="h1">
            {siteTitle}
        </Typography>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
