import React, { Component } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

export default class App extends Component {

    state = {
        isLoggedIn: true
    }

    render(){
        return(
            <div>
                {this.state.isLoggedIn ? (<Dashboard />) : (<Login />) }
            </div>
        )
    }
}