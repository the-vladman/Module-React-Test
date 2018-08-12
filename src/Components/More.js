import React, {Component} from 'react';
import './More.css';

import Content from './FooterContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class More extends Component {

  companiesCatalog(){
    const catalog = ['company1','company2','company3','company4','company5','company6'];
    return(
      <Grid container justify="center">
        {
          catalog.map(company => {
            return (
              <Grid item md={2}>
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
      <div>
        <Grid container justify="center">
          <Grid item md={6}>
              <p id='more-title'>The Ultimate Pasta Length Editor</p>
              <p id='more-description'>How to boost the design and developing process with a little help of</p>
              <p id='more-description'>four paws. True stort by Snoop Dogg</p>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={1}>
            <Button variant="contained">Try it for Free</Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={3}>
              <p id='more-pasta'>Superpasta trusted and used by multiple companies</p>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={10}>
            {this.companiesCatalog()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default More;
