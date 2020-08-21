import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: null,
  height: null,
  bmi: null,
};

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    getStats: {
      reducer(state, action) {
        state.weight = action.payload.weight;
        state.height = action.payload.height;
        state.bmi = action.payload.bmi;
      },
      prepare({ weight, height }) {
        const bmi = weight / ((height * height) / 10000);
        return {
          payload: {
            weight,
            height,
            bmi: Number(bmi.toFixed(2)),
          },
        };
      },
    },
    cleanData: () => initialState,
  },
});

export const { getStats, cleanData } = metricsSlice.actions;

export default metricsSlice.reducer;
