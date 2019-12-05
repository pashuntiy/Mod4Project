import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Welcome from './Welcome'

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

    componentWillUnmount(){
        localStorage.clear()

        this.setState({
            loggedInUserId: null,
            token: null
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
                {!!this.state.token ? (<Dashboard userID={this.state.loggedInUserId} logOutClick={this.logOutClick}/>) : (<Welcome setToken={this.setToken}/> )}
            </div>
        )
    }
}