import React, { Component } from 'react'

export default class Stats extends Component {

    state = {
        hunger: 10,
        social: 10,
        fun: 10,
        hygiene: 10
    }

    render(){
        return(
            <div className="stats">
                <h1>Stats</h1>
                <h2>Hunger: {this.state.hunger}</h2>
                <h2>Social: {this.state.social} </h2>
                <h2>Fun: {this.state.fun}</h2>
                <h2>Hygiene: {this.state.hygiene}</h2>
            </div>
        )
    }
}