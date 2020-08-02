import React, { useState } from 'react';
import { Link } from 'gatsby';

// material-ui
import { Typography, Container, InputAdornment, FormControlLabel, Radio, Box, Grid } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

// formik
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField, RadioGroup } from 'formik-material-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
    const [infos, setInfos] = useState(null);
    const [basalRate, setBasalRate] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [calculated, setCalculated] = useState(false);

    const calcBasalRate = values =>
        Math.round(10 * values.weight + 6.25 * values.height - 5 * values.age + (values.gender === 'male' ? +5 : -151));

    const calcBMI = values => {
        const BMI = values.weight / ((values.height * values.height) / 10000);
        return BMI.toFixed(2);
    };

    return (
        <Layout>
            <SEO title="Home" />
            <Box>
                {calculated ? (
                    <>
                        <Box component="section">
                            <Container maxWidth="sm" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                                <Typography variant="h4" component="h2">
                                    Your Stats
                                </Typography>
                            </Container>
                            <Box component="section" color="white" bgcolor="black">
                                <Container maxWidth="sm">
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        textAlign="center"
                                        paddingY="1rem"
                                        component={Grid}
                                        container
                                    >
                                        <Grid item>
                                            <Typography>age</Typography>
                                            <Typography variant="h4">{infos.age}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>height/cm</Typography>
                                            <Typography variant="h4">{infos.height}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>weight/cm</Typography>
                                            <Typography variant="h4">{infos.weight}</Typography>
                                        </Grid>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>

                        <Container maxWidth="sm">
                            <Box display="flex" justifyContent="space-between" marginY="1rem">
                                <Box>
                                    <Typography>Basal Rate</Typography>
                                    <Typography variant="h3" component="p">
                                        {basalRate}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>BMI</Typography>
                                    <Typography variant="h3" component="p">
                                        {bmi}
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>

                        <Box display="flex" justifyContent="center">
                            <Button variant="contained" disableElevation onClick={() => setCalculated(false)}>
                                Recalculate
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Formik
                        initialValues={{
                            gender: 'male',
                            age: '',
                            weight: '',
                            height: '',
                        }}
                        validationSchema={Yup.object({
                            age: Yup.number().required('Insert your age'),
                            weight: Yup.number().required('Insert your weight in kg'),
                            height: Yup.number().required('Insert your height in cm'),
                        })}
                        onSubmit={(values, actions) => {
                            setBasalRate(calcBasalRate(values));
                            setBmi(calcBMI(values));
                            setInfos(values);
                            actions.setSubmitting(false);
                            actions.resetForm();
                            setCalculated(true);
                        }}
                    >
                        {formik => (
                            <Form>
                                <Container>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Field component={RadioGroup} name="gender">
                                                <FormControlLabel
                                                    value="male"
                                                    control={<Radio disabled={formik.isSubmitting} />}
                                                    label="Male"
                                                    disabled={formik.isSubmitting}
                                                />
                                                <FormControlLabel
                                                    value="female"
                                                    control={<Radio disabled={formik.isSubmitting} />}
                                                    label="Female"
                                                    disabled={formik.isSubmitting}
                                                />
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                component={TextField}
                                                name="age"
                                                type="number"
                                                label="Age"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                component={TextField}
                                                name="weight"
                                                type="number"
                                                label="Weight"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
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
                                                    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginY="2rem">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={formik.submitForm}
                                            type="submit"
                                            disabled={!formik.isValid}
                                        >
                                            Calculate
                                        </Button>
                                        {/* <Button onClick={() => console.log(formik)}>Check values</Button> */}
                                    </Box>
                                </Container>
                            </Form>
                        )}
                    </Formik>
                )}
            </Box>
        </Layout>
    );
};

export default IndexPage;
