import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Header = ({ siteTitle }) => (
    <Container component="header">
        <Typography variant="h4" component="h1">
            Calories Calculator
        </Typography>
        <Typography paragraph>Get your Basal Metabolic Rate and BMI.</Typography>
    </Container>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
