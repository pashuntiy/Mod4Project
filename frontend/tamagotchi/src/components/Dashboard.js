import React, { Component } from 'react'
import Pet from './Pet.js'

export default class Dashboard extends Component {

    state = {
        seePet: false,
        allPets: []
    }

    handleClick = () => {
        this.setState({
            seePet: !this.state.seePet
        })
    }

    getPetImages = () => {
       return this.state.allPets.map((pet) => {
           return <img src={pet.image} alt="pet" key={pet.id}/>
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
    }

    render(){
        const petImages = this.getPetImages()
        const petDiv = <Pet seePet={this.state.seePet} handleClick={this.handleClick} />
        const dashboardDiv = <div className="dashboard"><h1>Hello from Dashboard</h1>{petImages}<br /><button onClick={this.handleClick}>See Your Pet</button></div>

        return(
            <div>
                {this.state.seePet ? petDiv : dashboardDiv}
            </div>
        )
    }
}