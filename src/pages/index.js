import React from 'react';
import { Link } from 'gatsby';

import { Typography } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Typography variant="h4" component="h1">
            Calories Calculator
        </Typography>
        <Typography>Welcome to your new Gatsby site.</Typography>
        <form>
            <label htmlFor="male">
                <input type="radio" name="male" id="male" />
                Male
            </label>
            <label htmlFor="female">
                <input type="radio" name="female" id="female" />
                Female
            </label>
        </form>
    </Layout>
);

export default IndexPage;
