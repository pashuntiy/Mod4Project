import React, { Component } from 'react'

export default class PetImage extends Component {
    render(){
        return(
            <img className="pet-image" alt="your pet" src={require("../imgs/default-dog.png")}/>
        )
    }
}
