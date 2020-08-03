import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';

const Header = () => (
    <Box component="header" bgcolor="black" color="white" paddingTop="2.5rem" paddingBottom="1rem">
        <Container>
            <Typography variant="h5" component="h1">
                Calories Calculator
            </Typography>
        </Container>
    </Box>
);

export default Header;
