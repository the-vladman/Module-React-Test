import React, {Component} from 'react';
import './Slider.css';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

class Slider extends Component {

  state = {
    checked: false,
    pivot: 1,
    direction: 'left',
    toRight: true,
    toLeft: false,
    sliderElements: [{ id: 1, title: 'Powerful Extensions', description:['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: true }, { id: 2, title: 'Powerful Extensions', description:['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: false, }, { id: 3, title: 'TPowerful Extensions', description:['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: false, }]
  };

  handleChange = (toRight) => {
    const newPivot = toRight ?this.state.pivot + 1: this.state.pivot - 1;
    const newArray = []
    this.state.sliderElements.forEach(e =>{
      let ne = e;
      if (newPivot === e.id) {
        ne.active = true
      } else {
        ne.active = false
      }
      newArray.push(ne)
    })
    this.setState({
      pivot: newPivot,
      sliderElements: newArray,
    })
  };

  paperDynamic = (element) =>{    
    return(
      <Grow key={element.id} in={element.active} mountOnEnter unmountOnExit>
        <Paper elevation={0}>
          <h1>{element.title}</h1>
        </Paper>
      </Grow>
    );
  };

  render() {
    const { sliderElements } = this.state;
    return (
    <Grid container justify="center">
      <Grid item md={1}>
        <IconButton aria-label="to back">
            <Icon onClick={this.handleChange.bind(this, false)}>arrow_back_ios</Icon>
        </IconButton>
      </Grid>
      <Grid item md={10}>
        {
          sliderElements.map(element =>{
            return this.paperDynamic(element)
          })
        }
      </Grid>
      <Grid item md={1}>
        <IconButton aria-label="to forward">
            <Icon onClick={this.handleChange.bind(this, true)}>arrow_forward_ios</Icon>
        </IconButton>
      </Grid>
    </Grid>
    );
  }
}

export default Slider;
