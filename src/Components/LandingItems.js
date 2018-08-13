import React, {Component} from 'react';
import './LandingItems.css';

import Grid from '@material-ui/core/Grid';

class LandingItems extends Component {

  landingItem(icon, title, description) {
    return (
      <Grid container spacing={8}>
        <Grid item md={2}>
          <img id='landing-item-img' alt={icon} src={`${process.env.PUBLIC_URL}/imgs/${icon}`}></img>
        </Grid>
        <Grid item md={10}>
          <p id='landing-item-title'>{title}</p>
          <p id='landing-item-text' >{description}</p>
        </Grid>
    </Grid>
  )};

  render() {
    return (
    <Grid className='landing-item' container>
      <Grid item md={4}>
        {this.landingItem('icon1.png', 'Keep your Data', 'Enterprise-ready performance and controls')}
      </Grid>
      <Grid item md={4}>
        {this.landingItem('icon2.png', 'Prototype your Project', '24/7 proactive threat scanning to prevent attacks')}
      </Grid>
      <Grid item md={4}>
        {this.landingItem('icon3.png', 'Create Smart Texts', '24/7 proactive threat scanning to prevent attacks')}
      </Grid>
    </Grid>);
  }
}

export default LandingItems;
