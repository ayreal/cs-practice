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
    message:
      "Hi {previousValue}, nice to meet you! I'm My Little Chatbot, but you can call me Myli. What topic would you like to discuss?",
    trigger: "topics"
  },
  {
    id: "topics",
    options: [
      { value: 1, label: "Money", trigger: "money" },
      { value: 2, label: "Love", trigger: "love" },
      { value: 3, label: "Other bots", trigger: "bots" }
    ]
  },
  {
    id: "money",
    message: "I am poor.",
    trigger: "topics"
  },
  {
    id: "love",
    message: "Are you in love?",
    trigger: "topics"
  },
  {
    id: "bots",
    message: "Which bot do you like best?",
    trigger: "topics"
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
          headerTitle={"Chat with Myli"}
          hideUserAvatar={true}
          placeholder={"Enter your responce to MLCB here"}
        />
      </div>
    );
  }
}

export default ChatBotContainer;
