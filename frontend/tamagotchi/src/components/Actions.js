import React, { Component } from 'react'
import TalkToMe from './TalkToMe'
import FeedMe from './FeedMe'
import ReactModal from 'react-modal'




export default class Actions extends Component {





    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>
                <ul>
                   
                    <li><FeedMe pauseGame={this.props.pauseGame} resumeGame={this.props.resumeGame} increaseStats={this.props.increaseStats} /></li>
                    <li><TalkToMe pauseGame={this.props.pauseGame} resumeGame={this.props.resumeGame} increaseStats={this.props.increaseStats}/></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="fun">Play with Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hygiene">Wash Me</button></li>
                </ul>
            </div>
        )
    }
}