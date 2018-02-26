import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatBotContainer from "./ChatBotContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Little Chatbot</h1>
        </header>
        <ChatBotContainer />
      </div>
    );
  }
}

export default App;
