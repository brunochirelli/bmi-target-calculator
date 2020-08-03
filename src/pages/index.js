import React, { useState } from 'react';
import { Link } from 'gatsby';

// material-ui
import {
    Typography,
    Container,
    InputAdornment,
    FormControlLabel,
    Radio,
    Box,
    Grid,
    Divider,
    Chip,
    Avatar,
} from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

// formik
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField, RadioGroup } from 'formik-material-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BmiBadge from '../components/BmiBadge';

const IndexPage = () => {
    const [basalRate, setBasalRate] = useState(null);
    const [dailyBurn, setDailyBurn] = useState(null);

    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState(null);
    const [bmiColor, setBmiColor] = useState(null);

    const [infos, setInfos] = useState(null);
    const [calculated, setCalculated] = useState(false);

    const calcBasalRate = values =>
        Math.round(10 * values.weight + 6.25 * values.height - 5 * values.age + (values.gender === 'male' ? +5 : -151));

    const calcBMI = values => {
        const BMI = values.weight / ((values.height * values.height) / 10000);

        if (BMI <= 18.5) {
            setBmiStatus('Underweight 18.5 or less');
            setBmiColor('#26B9E8');
        }
        if (BMI >= 18.5 && bmi < 25) {
            setBmiStatus('Normal Weight 18.5 - 24.99');
            setBmiColor('#26B9E8');
        }
        if (BMI >= 25 && bmi < 30) {
            setBmiStatus('Overweight 25 - 29.9');
            setBmiColor('#ECD71C');
        }
        if (BMI > 30) {
            setBmiStatus('Obese 30+');
            setBmiColor('#FF0000');
        }

        return BMI.toFixed(2);
    };

    return (
        <Layout>
            <SEO title="Home" />
            <Box>
                {calculated ? (
                    <>
                        <Container maxWidth="sm">
                            <Box marginY="1rem">
                                <Box marginY="1.5rem">
                                    <Typography variant="h6" component="h2" display="inline">
                                        BMI
                                    </Typography>{' '}
                                    <span>body mass index</span>
                                    <Typography variant="h2" component="p">
                                        {bmi}
                                    </Typography>
                                    <BmiBadge label={bmiStatus} color={bmiColor} />
                                </Box>
                                <Divider />
                                <Box marginY="1.5rem">
                                    <Typography variant="h6" component="h2" display="inline">
                                        Basal Rate
                                    </Typography>{' '}
                                    <span>calories/day</span>
                                    <Typography variant="h2" component="p">
                                        {basalRate}
                                    </Typography>
                                </Box>
                                <Divider />
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
