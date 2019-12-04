import React, { Component } from 'react'
import TalkToMe from './TalkToMe'


export default class Actions extends Component {

  state = {
    play: false
  }

  onClickModal = () => {
    this.setState({
      play: !this.state.play
    })
  }

    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>


                  {this.state.play ? <TalkToMe onClose={this.onClickModal} show={this.state.play}/> : ''}
                <ul>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hunger">Feed Me</button></li>
                    <li onClick={() => this.onClickModal()}><button onClick={(event) => this.props.increaseStats(event)}name="social">Talk to Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="fun">Play with Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hygiene">Wash Me</button></li>
                </ul>
            </div>
        )
    }
}