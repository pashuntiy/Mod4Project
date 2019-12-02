import React, { Component } from 'react'

export default class Actions extends Component {
    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>
                <ul>
                    <li><button>Feed Me</button></li>
                    <li><button>Talk to Me</button></li>
                    <li><button>Play with Me</button></li>
                    <li><button>Wash Me</button></li>
                </ul>
            </div>
        )
    }
}