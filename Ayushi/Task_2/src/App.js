import React, { Component } from "react";
import Validation from "./Validation.js";
import Char from "./Char.js";
import "./App.css";

class App extends Component {
  state = {
    inputValue: "",
  };

  inputChangedhandler = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  deleteEventHandler = (index) => {
    const text = this.state.inputValue.split("");

    text.splice(index, 1);

    const updatedText = text.join("");

    this.setState({
      inputValue: updatedText,
    });
  };

  render() {
    let charList = this.state.inputValue.split("").map((ch, index) => {
      return (
        <Char clicked={this.deleteEventHandler} character={ch} key={index} />
      );
    });

    return (
      <div className="App">
        <h1>Your todo List</h1>
        <input
          type="text"
          onChange={this.inputChangedhandler}
          value={this.state.inputValue}
          id="textfield"
        />
        <br></br>
        <Validation inputlength={this.state.inputValue.length} />
        {charList}
      </div>
    );
  }
}

export default App;
