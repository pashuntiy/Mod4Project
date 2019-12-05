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
    // play: false
    showModal: false
  }

//   onClickModal = () => {
//     this.setState({
//       play: !this.state.play
//     })
//   }

    handleOpenModal = () => {
        this.setState({
            showModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    render(){
        return(
            <div className="actions">
                <h1>Actions</h1>


                  {/* {this.state.play ? <TalkToMe onClose={this.onClickModal} show={this.state.play}/> : ''} */}
                <ul>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hunger">Feed Me</button></li>
                    {/* <li onClick={() => this.onClickModal()}><button onClick={(event) => this.props.increaseStats(event)}name="social">Talk to Me</button></li> */}
                    <li onClick={this.handleOpenModal}><button onClick={(event) => this.props.increaseStats(event)} name="social">Talk to Me</button></li>
                    <ReactModal isOpen={this.state.showModal} style={customStyles}>
                        <TalkToMe/>
                        <button onClick={this.handleCloseModal}>End Conversation</button>
                    </ReactModal>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="fun">Play with Me</button></li>
                    <li><button onClick={(event) => this.props.increaseStats(event)}name="hygiene">Wash Me</button></li>
                </ul>
            </div>
        )
    }
}