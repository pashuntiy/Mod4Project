import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

  state = {
      username: "",
      password: "",
      errors: []
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitClick = event => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
        username: this.state.username,
        password: this.state.password
      }
      })
    })
    .then(r => r.json())
    .then(resp => {
        if (resp.errors) {
        this.setState({
          errors: [...this.state.errors, resp.errors],
          username: "",
          password: ""
        })
      } else {
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(r => r.json())
        .then(resp => {
          if (resp.errors) {
            this.setState({
              errors: [...this.state.errors, resp.errors],
              username: "",
              password: ""
            })
          } else {
            this.props.setToken(resp)
          }
      })
      }
  })
}

  componentWillUnmount(){
    this.setState({
      username: "",
      password: "",
    })
  }

  render() {
      return (
          <div className="login">

            {this.state.errors.map(error => <p>{ error }</p>)}

              <h2>Signup</h2>
              <form>
                  <label>Username: </label>
                  <input onChange={this.onChange} name="username" type="text"/>
                  <br />
                  <label>Password: </label>
                  <input onChange={this.onChange} name="password" type="password"/>
                  <br />
                  <button onClick={this.submitClick}><Link to='/hello'>Submit</Link></button>
              </form>
          </div>
      )
  }

}

export default Signup