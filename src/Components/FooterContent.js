import React, {Component} from 'react';
import './FooterContent.css';

import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

class FooterContent extends Component {
  infoFooterItem(icon,description) {
    return (
      <Grid container spacing={40}>
        <Grid item md={2}>
          <img id='footer-item-img' alt={icon} src={`${process.env.PUBLIC_URL}/imgs/${icon}`}></img>
        </Grid>
        <Grid id='footer-item-text' item md={8}>
          <p>{description}</p>
        </Grid>
    </Grid>
  )};

  linkFooterItem(title, elements) {
    return (
      <Grid container  justify="center">
        <Grid item md={10}>
          <p id='footer-link-title'>{title}</p>
          {
            elements.map(element => {return <p key={element}>{element}</p>})
          }
        </Grid>
    </Grid>
  )};

  linksFooterItems() {
    return (
      <Grid container>
        <Grid item md={4}>
          {this.linkFooterItem('Support', ['About Us','Press','FAQ'])}
        </Grid>
        <Grid item md={4}>
          {this.linkFooterItem('Bussiness', ['Home','Mobile','Pricing'])}
        </Grid>
        <Grid item md={4}>
          {this.linkFooterItem('Community', ['Developers','Referrals','Forum'])}
        </Grid>
    </Grid>
  )};

  languajeFooterItem() {
    return (
      <Grid container  justify="center">
        <Grid item md={4}>
            <Select displayEmpty>
              <MenuItem><Icon>language</Icon>English (UK)</MenuItem>
            </Select>
        </Grid>
    </Grid>
  )};

  render() {
    return (
      <Grid container>
        <Grid item md={4}>
          {this.infoFooterItem('logo.png','Huge modern UI Kit containing 130+ terrific components in 11 popular categories. Each components is fully.')}
        </Grid>
        <Grid item md={4}>
          {this.linksFooterItems()}
        </Grid>
        <Grid item md={4}>
          {this.languajeFooterItem()}
        </Grid>
    </Grid>
    );
  }
}

export default FooterContent;
