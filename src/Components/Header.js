import React, { Component } from 'react';
import './Header.css';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

class Header extends Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { checked } = this.state;
    return (
      <AppBar position="sticky" color="default" className='module-header'>
        <Toolbar>
          <Hidden only={['xs','sm']}>
            <Grid container justify="center">
              <Grid item md={10}>
                <Grid container>
                  <Grid item md={2}>
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
          </Hidden>

          <Hidden only={['md','lg','xl']}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Grid className='menu-container' container justify='space-between'>
                  <Grid item md={3}>
                    <IconButton onClick={this.handleChange} id='header-button' aria-label="Menu"><Icon>menu</Icon></IconButton>
                  </Grid>
                  <Grid item md={3}>
                    <img id='header-icon-img' alt='logo' src={`${process.env.PUBLIC_URL}/imgs/logo.png`}></img>
                  </Grid>
                </Grid>
                {
                  checked ? (
                    <Grid container>
                      <Grid item xs={3}>
                        <Button href='#module-features-section' className='header-button'>Features</Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button href='#module-pricing-section' className='header-button'>Pricing</Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button href='#module-more-section' className='header-button'>Learn More</Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button href='#module-footer-section' className='header-button'>Contact Sales</Button>
                      </Grid>
                    </Grid>
                  ): null
                }
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
