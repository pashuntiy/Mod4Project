import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'


export default class Welcome extends Component {
    state = {
        returningUser: false
    }

    handleClick = () => {
        this.setState({
            returningUser: !this.state.returningUser
        })
    }
    render(){
        return(
            <div className="welcome">
                <h1>Hello from the Welcome Page!</h1>
                {this.state.returningUser ? (<button onClick={this.handleClick}>I'm a new user!</button>) : (<button onClick= { this.handleClick }>I'm a returning user!</button>)}

                 {this.state.returningUser ? (<Login setToken={this.props.setToken} />) : (<Signup setToken={this.props.setToken} />)}
            </div>
        )
    }
}