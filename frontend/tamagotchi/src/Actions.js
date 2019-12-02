import React, { Component } from 'react'

export default class Actions extends Component {
    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>
                <ul>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hunger">Feed Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="social">Talk to Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="fun">Play with Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hygiene">Wash Me</button></li>
                </ul>
            </div>
        )
    }
}