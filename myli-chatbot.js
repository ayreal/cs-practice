import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class ChatBotContainer extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "name"
          },
          {
            id: "name",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message:
              "Hi {previousValue}, nice to meet you! I'm My Little Chatbot, but you can call me Myli.",
            trigger: "topics"
          }

          //...
        ]}
      />
    );
  }
}
