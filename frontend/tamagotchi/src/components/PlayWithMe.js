import React from "react";
import "../index.css";
import ReactModal from 'react-modal'
import Game from './Game'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default class TalkToMe extends React.Component {

    state = {
        showModal: false,
        intervalID: null,
        timer: 0
    }

    handleTimer = () => {
        return window.setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            }, console.log(this.state.timer))
        }, 1000)
    }

    handleOpenModal = () => {
        this.props.pauseGame()
        this.setState({
            showModal: true
        })
        const intervalId = this.handleTimer()
        this.setState({
            intervalId: intervalId
        })
    }

    handleCloseModal = (event) => {
        this.props.resumeGame()
        this.setState({
            showModal: false
        })
        window.clearInterval(this.state.intervalId)
        this.props.increaseStats(event, this.state.timer)
        this.setState({
            timer: 0,
            intervalID: null
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Play With Me</button>
                <ReactModal isOpen={this.state.showModal} style={customStyles}>
                    <div>
                      <Game />
                    </div>
                    <br />
                    <button name="fun" onClick={(event) => this.handleCloseModal(event)}>Stop Playing</button>
                </ReactModal>
            </div>

        )

    }
}