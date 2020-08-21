import React from 'react';

import { useSelector } from 'react-redux';
import { Typography, Container, Box } from '@material-ui/core';
import StatsForm from '../components/StatsForm';
import Bmi from '../components/Bmi';
import Layout from '../components/layout/Layout';

const IndexPage = () => {
  const metrics = useSelector(state => state.metrics);

  return (
    <Layout>
      {metrics.weight || metrics.height ? (
        <main>
          <Bmi metrics={metrics} />
        </main>
      ) : (
        <Box display="flex" alignItems="center" height="90vh">
          <Container>
            <Typography variant="h2" component="h1">
              Hello,
            </Typography>
            <Typography>
              Check your BMI and how much you need to lose or gain to be in your ideal weight.
            </Typography>
            <StatsForm />
          </Container>
        </Box>
      )}
    </Layout>
  );
};

export default IndexPage;
