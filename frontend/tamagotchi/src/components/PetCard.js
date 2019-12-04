import React, { Component } from 'react'

export default class PetCard extends Component {
    render(){
        return(
            <div onClick={()=>this.props.handleClick(this.props.pet)}>
                <img src={this.props.pet.image} alt="pet" key={this.props.pet.id} />
            </div>
        )
    }
}