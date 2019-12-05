import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    render(){
        return(
            <div className="navbar">
                <h1>Welcome, {this.props.username}</h1>
                <button className="logout" onClick={this.props.onClick}><Link to='/hello'>Logout</Link></button>
            </div>

        )
    }
}