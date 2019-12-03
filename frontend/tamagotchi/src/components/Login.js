import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <div className="login">
                <h1>Hello from Login</h1>
                <form>
                    <label>Username: </label>
                    <input name="username" type="text"/>
                    <br />
                    <label>Password: </label>
                    <input name="password" type="text"/>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}