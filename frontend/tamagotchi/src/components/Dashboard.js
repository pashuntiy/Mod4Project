import React, { Component } from 'react'
import Pet from './Pet'
import PetCollection from './PetCollection'
import NavBar from './NavBar'

export default class Dashboard extends Component {

    state = {
        seePet: false,
        allPets: [],
        myPets: [],
        username: "",
        selectedPet: {}
    }

    handleAllPetsClick = (pet) => {
        this.setState({
            selectedPet: pet
        }, () => this.adoptAPet(pet))
    }

    adoptAPet = (pet) => {
        // debugger
        if(!this.state.myPets.find(element => element.id === pet.id)){
            fetch("http://localhost:3000/adopt_pets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user_id: this.props.userID,
                    pet_id: pet.id
                })
            })
            .then(r => r.json)
            .then(resObj => {
                this.setState({
                    myPets: [...this.state.myPets, pet]
                })
            })
        } else {
            alert("You've already adopted this pet!")
        }
        
    }

    handleMyPetsClick = (pet) => {
        this.setState({
            selectedPet: pet,
            seePet: !this.state.seePet
        })
    }

    handlePetClick = () => {
        this.setState({
            seePet: !this.state.seePet
        })
    }

    componentDidMount(){
        fetch("http://localhost:3000/pets")
        .then(r => r.json())
        .then(resObj => {
            this.setState({
                allPets: resObj
            })
        })
        fetch(`http://localhost:3000/users/${this.props.userID}`)
        .then(r => r.json())
        .then(resObj => {
            this.setState({
                myPets: resObj.pets,
                username: resObj.username
            })
        })
    }

    render(){
        const petDiv = 
        <Pet pet={this.state.selectedPet} seePet={this.state.seePet} handleClick={this.handlePetClick} userID={this.props.userID} />

        const dashboardDiv = 
        <div className="dashboard">
            <NavBar onClick={this.props.logOutClick} username={this.state.username} />

        <h3>All Pets</h3>
        <PetCollection pets={this.state.allPets} handleClick={this.handleAllPetsClick} myPetCollection={false} buttonText="Adopt Me"/>
        <h3>My Pets</h3>
        <PetCollection pets={this.state.myPets} handleClick={this.handleMyPetsClick} myPetCollection={true} buttonText="Play with Me"/>
        </div>

        return(
            <div>
                { this.state.seePet ? petDiv : dashboardDiv }
            </div>
        )
    }
}