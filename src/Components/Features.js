import React, { Component } from 'react';
import './Features.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FeatureItems from './FeatureItems';

class Features extends Component {
    render() {
        return (
            <Grid container alignItems='center' justify="center">
                <Grid item md={6}>
                    <p id='feature-title'>The Best Way to Work Together</p>
                    <p id='feature-description'>We design and develop software for funded startups and</p>
                    <p id='feature-description'>established companies. Here are just some examples of our work</p>
                </Grid>
                <Grid item md={10}>
                  <Card className='feature-banner'>
                    <CardMedia className='feature-banner-img' image={process.env.PUBLIC_URL + '/imgs/background.png'} title="Contemplative Reptile"></CardMedia>
                  </Card>
                </Grid>
                <Grid item md={10}>
                  <FeatureItems></FeatureItems>
                </Grid>
            </Grid>
        );
    }
}

export default Features;
