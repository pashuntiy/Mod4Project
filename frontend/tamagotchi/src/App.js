import React, { Component } from 'react';
import PetImage from './PetImage'
import Stats from './Stats'
import Actions from './Actions'

export default class App extends Component {

  state = {
    hunger: 10,
    social: 10,
    fun: 10,
    hygiene: 10
  }

  increaseStats = (event) => {
    const stateName = event.target.name
    this.setState({
      [stateName]: this.state[stateName] + 1
    })
  }

  render(){
    return (
      <div>
        <header>
        </header>
        <PetImage />
        <Stats hunger={this.state.hunger} social={this.state.social} fun={this.state.fun} hygiene={this.state.hygiene}/>
        <Actions hunger={this.state.hunger} social={this.state.social} fun={this.state.fun} hygiene={this.state.hygiene} increaseStats={this.increaseStats}/>
      </div>
    )
  }
}
