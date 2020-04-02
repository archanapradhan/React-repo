import React, { Component } from "react";
import UserInput from "./UserInput";

class UserOutput extends Component {
  state = {
    userName: "Archana"
  };

  userNameHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.userNameHandler}
          name={this.state.userName}
        ></UserInput>
      </div>
    );
  }
}

export default UserOutput;
