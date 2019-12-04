import React, { Component } from 'react'
import Pet from './Pet'
import PetCollection from './PetCollection'

export default class Dashboard extends Component {

    state = {
        seePet: false,
        allPets: [],
        selectedPet: {}
    }

    handleClick = (pet) => {
        this.setState({
            selectedPet: pet,
            seePet: !this.state.seePet
        })
        console.log(pet)
    }

    componentDidMount(){
        fetch("http://localhost:3000/pets")
        .then(r => r.json())
        .then(resObj => {
            this.setState({
                allPets: resObj
            })
        })
    }

    render(){
        const petDiv = <Pet pet={this.state.selectedPet} seePet={this.state.seePet} handleClick={this.handleClick} />
        const dashboardDiv = <div className="dashboard"><h1>Hello from Dashboard</h1><PetCollection pets={this.state.allPets} handleClick={this.handleClick}/></div>

        return(
            <div>
                { this.state.seePet ? petDiv : dashboardDiv }
            </div>
        )
    }
}