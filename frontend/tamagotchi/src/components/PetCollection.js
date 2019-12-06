import React, { Component } from 'react'
import PetCard from './PetCard'
import { Route, Switch, Redirect } from 'react-router-dom'


export default class PetCollection extends Component {

    state = {
        renderedPets: []
    }

    componentDidMount(){
        if (this.props.pets !== undefined) {
            this.setState({
                renderedPets: this.props.pets.map((pet) => {
                    return <PetCard pet={pet} handleClick={this.props.handleClick} key={pet.id} buttonText={this.props.buttonText} myPetCollection={this.props.myPetCollection} givePetUp={this.props.givePetUp} />
                })
            })
        } 
    }

    render(){
       

        return(

            <div className="pet-collection">
                {console.log(this.state.renderedPets)}
                {this.state.renderedPets.length === 0 ? (<Redirect to="/welcome" />) : this.state.renderedPets}
            </div>
        )
    }
}



// <Route path="/pet" render={ (props) => <PetCard {...props} pet={pet} handleClick={this.props.handleClick} key={pet.id} buttonText={this.props.buttonText} myPetCollection={this.props.myPetCollection} givePetUp={this.props.givePetUp}/> } />