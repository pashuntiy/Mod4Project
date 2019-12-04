import React, { Component } from 'react'
import PetCard from './PetCard'

export default class PetCollection extends Component {
    
    render(){
        const renderedPets = this.props.pets.map((pet) => {
            return <PetCard pet={pet} handleClick={this.props.handleClick} key={pet.id}/>
        })

        return(
            <div className="pet-collection">
                {renderedPets}
            </div>
        )
    }
}