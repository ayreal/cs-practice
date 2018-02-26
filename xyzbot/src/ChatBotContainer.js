import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class ChatBotContainer extends Component {
  render() {
    return (
      <div className="ChatBotContainer">
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
              trigger: "love-0"
            },
            {
              id: "love-0",
              options: [
                { value: 1, label: "Yes", trigger: "love-1" },
                { value: 2, label: "No", trigger: "love-2" },
                { value: 3, label: "Maybe", trigger: "love-3" }
              ]
            },
            {
              id: "love-1",
              message: "Congratulations! Who's the lucky person?",
              trigger: "love-1a"
            },
            {
              id: "love-2",
              message: "I feel you. Sometimes it's best to do your own thing.",
              trigger: "topics"
            },
            {
              id: "love-3",
              message:
                "Undecided? Tell me their name and I'll give my opinion.",
              trigger: "love-1a"
            },
            {
              id: "love-1a",
              user: true,
              trigger: "love-1b"
            },
            {
              id: "love-1b",
              message:
                "Aww {previousValue} is a really nice name! I'm sure you two have a great future together.",
              trigger: "topics"
            },
            {
              id: "bots",
              message: "Which bot do you like best?",
              trigger: "topics"
            }
          ]}
          headerTitle={"Chat with Myli"}
          hideUserAvatar={true}
          placeholder={"Enter your responce to MLCB here"}
        />
      </div>
    );
  }
}

export default ChatBotContainer;
