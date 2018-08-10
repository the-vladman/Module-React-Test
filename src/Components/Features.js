import React, { Component } from 'react';
import './Features.css';

import Grid from '@material-ui/core/Grid';

class Features extends Component {
    render() {
        return (
            <Grid container md={12} justify="center">
                <Grid item md={6} justify="center">
                    <p id='feature-title'>The Best Way to Work Together</p>
                    <p id='feature-description'>We design and develop software for funded startups and established companies. Here are just some examples of our work</p>
                </Grid>
            </Grid>
        );
    }
}

export default Features;
