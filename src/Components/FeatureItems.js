import React, {Component} from 'react';
import './FeatureItems.css';

import Grid from '@material-ui/core/Grid';

class FeatureItems extends Component {

  featureItem(icon, title, description) {
    return (
      <Grid container spacing={8}>
        <Grid item md={2}>
          <img id='feature-item-img' alt={icon} src={`${process.env.PUBLIC_URL}/imgs/${icon}`}></img>
        </Grid>
        <Grid id='feature-item-text' item md={10}>
          <p id='feature-item-title'>{title}</p>
          <p>{description}</p>
        </Grid>
    </Grid>
  )};

  render() {
    return (<Grid container>
      <Grid item md={4}>
        {this.featureItem('icon1.png', 'Keep your Data', 'Enterprise-ready performance and controls')}
      </Grid>
      <Grid item md={4}>
        {this.featureItem('icon2.png', 'Prototype your Project', '24/7 proactive threat scanning to prevent attacks')}
      </Grid>
      <Grid item md={4}>
        {this.featureItem('icon3.png', 'Create Smart Texts', '24/7 proactive threat scanning to prevent attacks')}
      </Grid>
    </Grid>);
  }
}

export default FeatureItems;
