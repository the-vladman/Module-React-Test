import React, { Component } from 'react';
import './Landing.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import LandingItems from './LandingItems';

class Landing extends Component {
    render() {
        return (
            <Grid container alignItems='center' justify="center">
                <Grid item md={6}>
                    <p id='landing-title'>The Best Way to Work Together</p>
                    <p className='landing-description-text' id='landing-description'>We design and develop software for funded startups and</p>
                    <p className='landing-description-text' id='landing-description-2'>established companies. Here are just some examples of our work</p>
                </Grid>
                <Grid item md={10}>
                  <Card className='landing-banner'>
                    <CardMedia className='landing-banner-img' image={process.env.PUBLIC_URL + '/imgs/background.png'} title="Contemplative Reptile"></CardMedia>
                  </Card>
                </Grid>
                <Grid item md={10}>
                    <LandingItems></LandingItems>
                </Grid>
            </Grid>
        );
    }
}

export default Landing;
