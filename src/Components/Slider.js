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
    sliderElements: [{ id: 1, title: 'Powerful Extensions 1', link: 'linkToElement', description: ['This article is floated online with an aim to help 2', 'you find the best dvd printing solution. Dvd', 'printing is'], active: true }, { id: 2, title: 'Powerful Extensions 2', link: 'linkToElement', description: ['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: false, }, { id: 3, title: 'TPowerful Extensions3', link: 'linkToElement', description: ['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: false, }, { id: 4, title: 'TPowerful Extensions4', link: 'linkToElement', description: ['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: false, }, { id: 5, title: 'TPowerful Extensions5', link: 'linkToElement', description: ['This article is floated online with an aim to help', 'you find the best dvd printing solution. Dvd', 'printing is'], active: false, }]
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
    this.verifyElements(newPivot);
  };

  verifyElements = (newPivot) => {
    newPivot < 2 ? this.setState({ toLeft: false }): this.setState({ toLeft: true });

    if (newPivot === this.state.sliderElements.length) {
      this.setState({ toRight: false })
    } else {
      this.setState({ toRight: true })
    }
  };

  paperDynamic = (element) =>{
    if (element.active) {
      return (
        <Grow key={element.id} in={element.active} mountOnEnter unmountOnExit>
          <Paper elevation={0}>
            <p id='slider-title'>{element.title}</p>
            {
              element.description.map(d => {
                return <p id='slider-description' key={d}>{d}</p>
              })
            }
            <p id='slider-link'>Learn more <Icon>arrow_forward_ios</Icon></p>
          </Paper>
        </Grow>
      );
    } else {
      return null;
    }
  };

  circlePagination = (active) =>{
    return(this.state.sliderElements.map(e =>{
      return( active == e.id ? <span className='dot' id='active'></span> : <span className='dot' id='inactive'></span>);
    })
  );
  };

  render() {
    const { sliderElements, toLeft, toRight, pivot } = this.state;
    return (
    <Grid container justify="center">
      <Grid item md={1}>
          {toLeft ? <IconButton id='slider-button' onClick={this.handleChange.bind(this, false)} aria-label="to back"><Icon fontSize='inherit'>arrow_back_ios</Icon></IconButton>: null }
      </Grid>
      <Grid item md={10}>
        <div className='slider-content'>
          {
            sliderElements.map(element => {
              return this.paperDynamic(element)
            })
          }
          {this.circlePagination(pivot)}
        </div>
      </Grid>
      <Grid item md={1}>
          {toRight ? <IconButton id='slider-button' onClick={this.handleChange.bind(this, true)} aria-label="to forward"><Icon fontSize='inherit'>arrow_forward_ios</Icon></IconButton>:null }
      </Grid>
    </Grid>
    );
  }
}

export default Slider;
