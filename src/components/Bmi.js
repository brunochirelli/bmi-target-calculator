import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Typography, Chip, Avatar, Box, Grid } from '@material-ui/core';

const Bmi = ({ metrics }) => {
  const [bmiStatus, setBmiStatus] = useState(null);
  const [bmiColor, setBmiColor] = useState(null);

  const [bmiTargetWeight1, setBmiTargetWeight1] = useState(null);
  const [bmiTargetWeight2, setBmiTargetWeight2] = useState(null);

  const [bmiTargetStatus1, setBmiTargetStatus1] = useState(null);
  const [bmiTargetStatus2, setBmiTargetStatus2] = useState(null);

  useEffect(() => {
    const calcMass = target =>
      ((metrics.weight - target * ((metrics.height * metrics.height) / 10000)) * -1).toFixed(2);

    const calcBMI = values => {
      // Underweight
      if (values.bmi < 18.5) {
        setBmiStatus('Underweight 18.5 or less');
        setBmiColor('#26B9E8');

        // Get the amount to lose or gain to reach the target
        setBmiTargetStatus1('normal weight');
        setBmiTargetWeight1(calcMass(18.5));

        setBmiTargetStatus2('overweight');
        setBmiTargetWeight2(calcMass(25));
      }

      // Normal
      if (values.bmi >= 18.5 && values.bmi < 25) {
        setBmiStatus('Normal Weight 18.5 - 24.9');
        setBmiColor('#90C846');

        setBmiTargetStatus1('underweight');
        setBmiTargetWeight1(calcMass(18.4));

        setBmiTargetStatus2('overweight');
        setBmiTargetWeight2(calcMass(25));
      }

      // Overweight
      if (values.bmi >= 25 && values.bmi < 30) {
        setBmiStatus('Overweight 25 - 29.9');
        setBmiColor('#ECD71C');

        setBmiTargetStatus1('normal weight');
        setBmiTargetWeight1(calcMass(24.9));

        setBmiTargetStatus2('obese');
        setBmiTargetWeight2(calcMass(30.1));
      }

      // Obese
      if (values.bmi > 30) {
        setBmiStatus('Obese 30+');
        setBmiColor('#FF0000');

        setBmiTargetStatus1('overweight');
        setBmiTargetWeight1(calcMass(29.9));

        setBmiTargetStatus2('normal weight');
        setBmiTargetWeight2(calcMass(24.9));
      }
    };
    calcBMI(metrics);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box textAlign="center" display="flex" alignItems="center" height="90vh">
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography>BMI</Typography>
          <Typography>body mass index</Typography>
          <Typography variant="h1">{metrics.bmi}</Typography>
          <Chip
            label={bmiStatus}
            variant="outlined"
            avatar={<Avatar style={{ backgroundColor: bmiColor }}> </Avatar>}
          />
        </Grid>
        <Grid item xs={12} style={{ padding: '2rem 0' }}>
          <Typography>
            <span style={{ fontWeight: 'bolder' }}>{bmiTargetWeight1} kg</span> to{' '}
            {bmiTargetStatus1}
          </Typography>
          <Typography>
            <span style={{ fontWeight: 'bolder' }}>{bmiTargetWeight2} kg</span> to{' '}
            {bmiTargetStatus2}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bmi;

Bmi.propTypes = {
  metrics: PropTypes.object,
};
