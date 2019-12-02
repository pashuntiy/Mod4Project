import React, { Component } from 'react'

export default class Mood extends Component {
    renderImage = () => {
        if (this.props.mood === "happy") {
            return <img alt="smiley" src="http://clipart-library.com/images/6Tp5erXGc.jpg" />
        } else {
            return <img alt="frowny" src="http://clipart-library.com/images/rinGgodBT.jpg" />
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