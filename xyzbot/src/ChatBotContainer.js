import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

const STEPS = [
  {
    id: "hello-world",
    message: "Hello World!",
    end: true
  }
];

class ChatBotContainer extends Component {
  state = {
    inputValue: "",
    currentStep: {},
    previousStep: {}
  };

  handleChange = event => {
    debugger;
  };

  render() {
    return (
      <div className="ChatBotContainer">
        <ChatBot
          steps={STEPS}
          onChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}

export default ChatBotContainer;
