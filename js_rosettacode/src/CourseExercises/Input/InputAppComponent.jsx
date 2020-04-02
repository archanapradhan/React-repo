import React, { Component } from "react";
import Validation from "./Validation";
import Char from "./Char";

class InputAppComponent extends Component {
  state = {
    userInput: ""
  };

  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (event, index) => {
    // debugger;
    console.log("Event is:" + event);
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    let charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={event => this.deleteCharHandler(event, index)}
        />
      );
    });
    return (
      <div classname="d-inline-flex p-2">
        <hr />
        <label className="h3 bg-success">Write a text in the field below</label>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />

        <p>{this.state.userInput}</p>
        <Validation getTextLength={this.state.userInput.length}></Validation>
        <hr />
        {charList}
      </div>
    );
  }
}

export default InputAppComponent;
