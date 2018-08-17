import React, {Component} from 'react';
import './More.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

class More extends Component {

  companiesCatalog(){
    const catalog = ['company1','company2','company3','company4','company5','company6'];
    return(
      <Grid container justify="center" id='more-companies'>
        {
          catalog.map(company => {
            return (
              <Grid key={company} item xs={12} sm={10} md={2}>
                <img id='more-company-img' alt={company} src={`${process.env.PUBLIC_URL}/imgs/${company}.png`}></img>
              </Grid>
            )
          })
        }
      </Grid>
    );
  }

  render() {
    return (
      <div className='module-more' id='module-more-section'>
        <Grid container justify="center">
          <Grid item xs={10} sm={10} md={6}>
              <p id='more-title'>The Ultimate Pasta Length Editor</p>
              <Hidden only={['xs', 'sm']}>
                <p className='more-description-text' id='more-description'>How to boost the design and developing process with a little help of</p>
                <p className='more-description-text' id='more-description-2'>four paws. True stort by Snoop Dogg</p>
              </Hidden>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid id='try-button-content' item xs={8} sm={6} md={1}>
            <Button fullWidth id='try-button' variant="contained">Try it for Free</Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={3}>
              <p id='more-pasta'>Superpasta trusted and used by multiple companies</p>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems='center'>
          <Grid item xs={8} sm={8} md={8}>
            {this.companiesCatalog()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default More;
