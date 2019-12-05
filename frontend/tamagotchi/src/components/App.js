import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Welcome from './Welcome'
import { Route, Switch, Redirect } from 'react-router-dom'


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

            <Switch>
              <Route path="/hello" render={ (props) => <Welcome {...props} setToken={this.setToken}/> } />
              <Route path="/dashboard" render={ (props) =>  <Dashboard {...props} userID={this.state.loggedInUserId} logOutClick={this.logOutClick}/> } />
              <Route exact path='/' render = { () => <Redirect to="/hello" /> } />
            </Switch>

            {this.state.token ? <Redirect to="/dashboard" /> : <Redirect to="/hello" />}

            </div>
        )
    }
}

// {!!this.state.token ? (<Dashboard userID={this.state.loggedInUserId} logOutClick={this.logOutClick}/>) : (<Welcome setToken={this.setToken}/> )}
