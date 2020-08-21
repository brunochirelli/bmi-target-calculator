import React, { useState } from 'react';

// formik
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { useDispatch } from 'react-redux';
import { Grid, InputAdornment, Box, Button } from '@material-ui/core';
import { getStats } from '../features/metrics/metricsSlice';

const StatsForm = () => {
  const [weightFocus, setWeightFocus] = useState(false);
  const [heightFocus, setHeightFocus] = useState(false);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        weight: '',
        height: '',
      }}
      validationSchema={Yup.object({
        weight: Yup.number().required('Insert your weight in kg'),
        height: Yup.number().required('Insert your height in cm'),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm();
        actions.setSubmitting(false);
        dispatch(getStats(values));
      }}
      validateOnBlur
    >
      {formik => (
        <Form style={{ margin: '2rem auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="weight"
                type="number"
                label="Weight"
                variant="outlined"
                InputProps={{
                  onFocus: () => setWeightFocus(true),
                  onBlur: e => {
                    if (!formik.values.weight) {
                      setWeightFocus(false);
                      formik.handleBlur(e);
                    }
                  },
                  startAdornment: !weightFocus && (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                  endAdornment: weightFocus && <InputAdornment position="end">kg</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="height"
                type="number"
                label="Height"
                variant="outlined"
                InputProps={{
                  onFocus: () => setHeightFocus(true),
                  onBlur: e => {
                    if (!formik.values.height) {
                      setHeightFocus(false);
                      formik.handleBlur(e);
                    }
                  },
                  startAdornment: !heightFocus && (
                    <InputAdornment position="start">cm</InputAdornment>
                  ),
                  endAdornment: heightFocus && <InputAdornment position="end">cm</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          <Box marginY="2rem">
            <Button variant="contained" color="primary" type="submit" disabled={!formik.isValid}>
              Calculate
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default StatsForm;
