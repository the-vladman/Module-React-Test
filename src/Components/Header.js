import React, { Component } from 'react';
import './Header.css';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <AppBar position="sticky" color="default" className='module-header'>
        <Toolbar>
          <Grid container justify="center">
            <Grid item md={10} xs={12} sm={12}>
              <Grid container>
                <Grid item md={1}>
                  <p className='header-title'>module <sup className='header-sup'>02</sup></p>
                </Grid>
                <Grid item md={8}>
                  <div className='header-menu'>
                    <Button href='#module-features-section' className='header-button'>Features</Button>
                    <Button href='#module-pricing-section' className='header-button'>Pricing</Button>
                    <Button href='#module-more-section' className='header-button'>Learn More</Button>
                    <Button href='#module-footer-section' className='header-button'>Contact Sales</Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
