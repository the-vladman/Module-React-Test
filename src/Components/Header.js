import React, { Component } from 'react';
import './Header.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    const menuButtonStyle = ({
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
    });

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          Module
          <div className='header-menu'>
            <Button size='small'>Features</Button>
            <Button size='small'>Pricing</Button>
            <Button size='small'>Learn More</Button>
            <Button size='small'>Contact Sales</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
