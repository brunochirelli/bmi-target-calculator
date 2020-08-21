import React from 'react';
import Bmi from './Bmi';
import StatsForm from './StatsForm';

const BasalRate = () => {
  const calcBasalRate = values =>
    Math.round(
      10 * values.weight +
        6.25 * values.height -
        5 * values.age +
        (values.gender === 'male' ? +5 : -151)
    );

  return <div>Basal Rate</div>;
};

export default BasalRate;
