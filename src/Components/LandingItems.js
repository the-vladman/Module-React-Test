import React, {Component} from 'react';
import './LandingItems.css';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class LandingItems extends Component {

  landingItem(icon, title, description) {
    return (
      <Grid className='landing-item' container>
        <Grid item xs={3} md={2}>
          <img id='landing-item-img' alt={icon} src={`${process.env.PUBLIC_URL}/imgs/${icon}`}></img>
        </Grid>
          <Grid item xs={7} md={8}>
              <p id='landing-item-title'>{title}</p>
            <Hidden only={['xs', 'sm']}>
              <p id='landing-item-text' >{description}</p>
            </Hidden>
          </Grid>
        
    </Grid>
  )};

  render() {
    return (
      <Hidden only='xs'>
      <Grid className='landing-items' container>
        <Grid item xs={4} sm={4} md={4}>
          {this.landingItem('icon1.png', 'Keep your Data', 'Enterprise-ready performance and controls')}
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          {this.landingItem('icon2.png', 'Prototype your Project', '24/7 proactive threat scanning to prevent attacks')}
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          {this.landingItem('icon3.png', 'Create Smart Texts', '24/7 proactive threat scanning to prevent attacks')}
        </Grid>
      </Grid>
      </Hidden>);
  }
}

export default LandingItems;
