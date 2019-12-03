import React, { Component } from 'react';
import PetImage from './PetImage'
import Stats from './Stats'
import Actions from './Actions'
import Mood from './Mood'
import Timer from './Timer'

export default class App extends Component {

  state = {
    hunger: 5,
    social: 5,
    fun: 5,
    hygiene: 5,
    mood: "sad",
    timer: 0
  }

  increaseStats = (event) => {
    const stateName = event.target.name
    this.setState({
      [stateName]: this.state[stateName] + 1
    }, () => this.changeMood())
  }

  decreaseStats = () => {
    window.setInterval(() => {
      const newHungerState = this.state.hunger === 0 ? 0 : this.state.hunger -1
      const newSocialState = this.state.social === 0 ? 0 : this.state.social -1
      const newFunState = this.state.fun === 0 ? 0 : this.state.fun -1
      const newHygieneState = this.state.hygiene === 0 ? 0 : this.state.hygiene -1
      
      this.setState({
        hunger: newHungerState,
        social: newSocialState,
        fun: newFunState,
        hygiene: newHygieneState
      }, () => this.changeMood())
    }, 30000)
  }

  changeMood = () => {
    if(this.state.hunger >= 10 && this.state.social >= 10 && this.state.fun >= 10 && this.state.hygiene >= 10){
      this.setState({
        mood: "happy"
      })
    } else if (this.state.hunger === 0 && this.state.social === 0 && this.state.fun === 0 && this.state.hygiene === 0){
      this.setState({
        mood: "dead"
      })
    } else {
      this.setState({
        mood: "sad"
      })
    }
  }

  componentDidMount(){
    this.decreaseStats()
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
        {/* <Timer handleClick={this.decreaseStats}/> */}
      </div>
    )
  }
}
