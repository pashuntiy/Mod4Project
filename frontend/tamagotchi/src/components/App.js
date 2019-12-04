import React, { Component } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

export default class App extends Component {

    state = {
        token: null,
        loggedInUserId: null
    }

    componentDidMount(){
        this.setState({
          token: localStorage.token,
          loggedInUserId: localStorage.userId,
        })
    }


    setToken = event => {
      localStorage.token = event.token
      localStorage.userId = event.user_id

      this.setState({
        token: event.token,
        loggedInUserId: event.user_id
      })
    }

    logOutClick = () => {
      localStorage.clear()

      this.setState({
        loggedInUserId: null,
        token: null
      })
    }

    render(){
        return(
            <div>
                {!!this.state.token ? (<Dashboard userID={this.state.loggedInUserId} logOutClick={this.logOutClick}/>) : (<Login setToken={this.setToken}/>)}
            </div>
        )
    }
}