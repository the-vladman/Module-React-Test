import React, {Component} from 'react';
import './Features.css';

import Slider from './Slider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Features extends Component {
  render() {
    return (
      <div className='module-features' id='module-features-section'>
        <Grid container justify="center">
          <Grid item xs={11} sm={11} md={10}>
            <Grid container justify="flex-end">
              <Hidden only='xs'>
                <Grid item sm={3} md={6}>
                  <img id='features-item-img' alt={`${process.env.PUBLIC_URL}/imgs/features.png`} src={`${process.env.PUBLIC_URL}/imgs/features.png`}></img>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8} md={6}>
                <Slider></Slider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Features;
