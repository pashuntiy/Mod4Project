import React, { Component } from 'react';
import PetImage from './PetImage'
import Stats from './Stats'
import Actions from './Actions'
import Mood from './Mood'

export default class App extends Component {

  state = {
    hunger: 5,
    social: 10,
    fun: 10,
    hygiene: 10,
    mood: "sad"
  }

  increaseStats = (event) => {
    const stateName = event.target.name
    this.setState({
      [stateName]: this.state[stateName] + 1
    }, () => this.changeMood())
  }

  changeMood = () => {
    if(this.state.hunger >= 10 && this.state.social >= 10 && this.state.fun >= 10 && this.state.hygiene >= 10){
      this.setState({
        mood: "happy"
      })
    } else {
      this.setState({
        mood: "sad"
      })
    }
  }

  render(){
    return (
      <div>
        <header>
        </header>
        <PetImage />
        <Stats hunger={this.state.hunger} social={this.state.social} fun={this.state.fun} hygiene={this.state.hygiene}/>
        <Actions hunger={this.state.hunger} social={this.state.social} fun={this.state.fun} hygiene={this.state.hygiene} increaseStats={this.increaseStats}/>
        <Mood mood={this.state.mood}/>
      </div>
    )
  }
}
