import React from 'react';
import PropTypes from 'prop-types';
import RootWrapper from './RootWrapper';

export const wrapPageElement = ({ element }) => <RootWrapper>{element}</RootWrapper>;

wrapPageElement.propTypes = {
    element: PropTypes.any,
};
