import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

const STEPS = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true
  }
];

class ChatBotContainer extends Component {
  handleChange = event => {
    debugger;
  };

  render() {
    return (
      <div className="ChatBotContainer">
        <ChatBot
          steps={STEPS}
          headerTitle={"MLCB"}
          hideUserAvatar={true}
          placeholder={"Enter your responce to MLCB here"}
        />
      </div>
    );
  }
}

export default ChatBotContainer;
