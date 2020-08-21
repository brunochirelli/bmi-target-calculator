import { configureStore } from '@reduxjs/toolkit';

import metricsReducer from './metrics/metricsSlice';

export default configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});
