import React, { Component } from 'react'

export default class Mood extends Component {
    renderImage = () => {
        if (this.props.mood === "happy") {
            return <img alt="smiley" src={require("../imgs/happy-emoji.jpg")} />
        } else if(this.props.mood === "dead") {
            return <img alt="dead" src={require("../imgs/dead-emoji.png")}/>
        } else {
            return <img alt="frowny" src={require("../imgs/sad-emoji.jpg")} />
        }
    }

    render(){

        const renderedImage = this.renderImage()

        return(
            <div className="mood">
                <h1>Mood</h1>
                {renderedImage}
            </div>
        )
    }
}