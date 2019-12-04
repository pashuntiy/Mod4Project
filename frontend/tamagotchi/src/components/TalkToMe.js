import React from "react";
import "../index.css";


export default class TalkToMe extends React.Component {



  render() {
      if(!this.props.show){
          return null;
      }
    return <div>
                <iframe
                  allow="microphone;"
                  width="350"
                  height="430"
                  src="https://console.dialogflow.com/api-client/demo/embedded/72804a76-996a-4e58-af18-5d96f8ea30a5">
                </iframe>
                <button id="centered-toggle-button" onClick={e => {this.props.onClose(e);}}>Stop conversation</button>
            </div>

  }
}