import React, { Component } from 'react'
import TalkToMe from './TalkToMe'
import ReactModal from 'react-modal'

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


export default class Actions extends Component {

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

    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>
                <ul>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hunger">Feed Me</button></li>
                    <li><button onClick={this.handleOpenModal}>Talk to Me</button></li>
                    <ReactModal onKeyPress={this.handleKeyPress} isOpen={this.state.showModal} style={customStyles}>
                        <TalkToMe/>
                        <button name="social" onClick={(event) => this.handleCloseModal(event)}>End Conversation</button>
                    </ReactModal>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="fun">Play with Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hygiene">Wash Me</button></li>
                </ul>
            </div>
        )
    }
}