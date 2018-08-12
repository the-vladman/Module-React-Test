import React, {Component} from 'react';
import './Footer.css';

import Content from './FooterContent';
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item md={10}>
          <Content></Content>
        </Grid>
    </Grid>
    );
  }
}

export default Footer;
