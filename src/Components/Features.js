import React, {Component} from 'react';
import './Features.css';

import Slider from './Slider';
import Grid from '@material-ui/core/Grid';

class Features extends Component {
  render() {
    return (
      <div id='module-features-section'>
        <img id='features-item-img' alt={`${process.env.PUBLIC_URL}/imgs/features.png`} src={`${process.env.PUBLIC_URL}/imgs/features.png`}></img>
        <Grid container justify="center">
          <Grid item md={10}>
            <Grid container justify="flex-end">
              <Grid item md={6}>
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
