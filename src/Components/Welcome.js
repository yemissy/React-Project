import React, { Component } from 'react';
import Profile from '../Images/profile2.jpg';
import Categories from './Categories.js';

class Welcome extends Component{
  constructor(props){
    super(props);
    this.state={
      photographersPic: Profile,
    }
  }
  render(){
    return (
      <div>
        <button id ="formLoad" onClick ={ () => this.props.renderThis('request')}>Book Services</button>
        <div id="headContainer"><h1 id="mainHead">Sam's Photography</h1></div>
        <img src={this.state.photographersPic} className="ProfileImg"></img>
        <button onClick={ () => this.props.renderThis('mainScreen')} className="enter">
          Enter Site
        </button>
      </div>
    )
  }
}

export default Welcome;
