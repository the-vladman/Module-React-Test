import React, {Component} from 'react';
import './Slider.css';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

class Slider extends Component {
  render() {
    return (
    <Grid container justify="center">
      <Grid item md={1}>
        <IconButton aria-label="to back">
          <Icon>arrow_back_ios</Icon>
        </IconButton>
      </Grid>
      <Grid item md={10}>

      </Grid>
      <Grid item md={1}>
        <IconButton aria-label="to forward">
          <Icon>arrow_forward_ios</Icon>
        </IconButton>
      </Grid>
    </Grid>
    );
  }
}

export default Slider;
