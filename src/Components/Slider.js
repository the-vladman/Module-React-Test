import React, {Component} from 'react';
import './Slider.css';

import Content from './FooterContent';
import Grid from '@material-ui/core/Grid';

class Slider extends Component {
  render() {
    return (
      <div id='module-features-section'>
        <img id='slider-item-img' alt={`${process.env.PUBLIC_URL}/imgs/features.png`} src={`${process.env.PUBLIC_URL}/imgs/features.png`}></img>
        <Grid container justify="center">
          <Grid item md={10}>
            <h1>ssdds</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Slider;
