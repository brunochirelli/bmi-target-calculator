import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import RootWrapper from './RootWrapper';
import store from './src/features/store';

export const wrapPageElement = ({ element }) => (
  <Provider store={store}>
    <RootWrapper>{element}</RootWrapper>
  </Provider>
);

wrapPageElement.propTypes = {
  element: PropTypes.any,
};
