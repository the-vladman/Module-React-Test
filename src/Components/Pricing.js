import React, {Component} from 'react';
import './Pricing.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class Pricing extends Component {

  pricingPaper(price){
    return(
      <Grid item md={4} key={price.id}>
        <Paper className='pricing-papers' elevation={1}>
          {this.pricingTitle(price)}
          {this.pricingDivider()}
          {this.pricingValue(price)}
          {this.pricingDivider()}
          {this.pricingFeatures(price)}
          {this.pricingButton()}
        </Paper>
      </Grid>
    );
  }

  pricingDivider(){
    return(
      <Grid container justify="center">
        <Grid item md={10}>
          <Divider />
        </Grid>
      </Grid>
    )
  }

  pricingTitle(price){
    return(
      <Grid container justify="center">
        <Grid item md={8}>
            <p className='pricing-feature-title'>{price.name}</p>
            <p className='pricing-feature-description'>{price.resume}</p>
        </Grid>
      </Grid>
    )
  }
  pricingValue(price){
    return(
      <Grid container justify="center">
        <Grid item md={10}>
            <p className='pricing-value'>${price.value}</p>
            <p className='pricing-value-u'>{price.value > 0 ? 'per month' : 'always free'}</p>
            { price.description.map(d => {return <p key={d} className='pricing-value-description'>{d}</p>}) }
        </Grid>
      </Grid>
    )
  }
  pricingFeaturesText(text, price){
    let element = <p className='pricing-feature-text'><Icon className='pricing-icon'>done</Icon> {text}</p>
    switch (text) {
      case 'Gb of space':
        element = <p className='pricing-feature-text'><Icon className='pricing-icon'>done</Icon> {`${price.space} ${text}`}</p>
        break;
      case 'days of file recovery':
        element = <p className='pricing-feature-text'><Icon className='pricing-icon'>done</Icon> {`${price.days} ${text}`}</p>
        break;
      case 'Unlimited third-party integrations':
        if (price.value < 8.99) {
          element = <p className='pricing-feature-text-disabled'><Icon className='pricing-icon'></Icon>{text}</p>
        }
        break;
      case 'Remote wipe':
        if (price.value < 18.98) {
          element = <p className='pricing-feature-text-disabled'><Icon className='pricing-icon'></Icon>{text}</p>
        }
        break;
      default:

    }
    return element;
  }

  pricingFeatures(price){
    const texts = ['Gb of space', 'days of file recovery','Ms Office 365 Integration', 'Unlimited third-party integrations', 'Remote wipe'];
    return(
      <Grid container justify="center">
        {texts.map(text => {
          return(
            <Grid item key={text} md={10}>
              {this.pricingFeaturesText(text, price)}
            </Grid>
          )
          })
        }
      </Grid>
    )
  }

  pricingButton(){
    return(
      <Grid container justify='center' className='pricing-button-container'>
        <Grid item md={10}>
          <Button fullWidth variant="contained" className='pricing-button'>Get Started</Button>
        </Grid>
      </Grid>
    )
  }

  render() {
    const prices = [{
      id: 1,
      name: 'Basic',
      resume: 'For taste our product',
      description:['How to boost the design and developing','process width help of four paws.'],
      value: 0,
      space: 2,
      days: 30,

    },
    {
      id: 2,
      name: 'Professional',
      resume: 'Make individual product',
      description:['Computer War Games How to Estimate','Decisions Made By C C Trainess.'],
      value: 8.99,
      space: 8,
      days: 60,

    },
    {
      id: 3,
      name: 'Bussiness',
      resume: 'For big companies',
      description:['Direct Mail Advertising How I Made 47','325 In 30 Day By Mailing.'],
      value: 18.99,
      space: 30,
      days: 90,
    }];
    return (
      <div id='module-pricing-section' className='pricing-section'>
        <Grid container justify="center">
          <Grid item md={6}>
              <p className='pricing-title'>Simple Pricing</p>
              <p className='pricing-description-text pricing-description'>It seems from the moment you begin to take your love of astronomy</p>
              <p className='pricing-description-text pricing-description-2'>seriously, the thing that is on mind is what kind.</p>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={10}>
            <Grid container>
              {
                prices.map(price =>{return this.pricingPaper(price)})
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Pricing;
