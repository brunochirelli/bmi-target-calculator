import React from 'react';
import { IconButton, Box } from '@material-ui/core';
import { Github, TrackChanges } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { cleanData } from '../../features/metrics/metricsSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Box component="header" position="fixed" top="0" width="100%">
      <Box component="nav" display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <IconButton onClick={() => dispatch(cleanData())}>
            <TrackChanges style={{ fontSize: '2.75rem', color: 'black' }} />
          </IconButton>
        </div>
        <div>
          <IconButton href="https://github.com/brunochirelli/bmi-target-calculator" target="_blank">
            <Github />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
