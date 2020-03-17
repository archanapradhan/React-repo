import React, { Component } from "react";

class PiCal extends Component {
  state = {
    digit: "",
    output: ""
  };

  handleChange = eve => {
    console.log(eve);
    this.setState({ digit: eve.target.value });
  };
  //Find PI to the Nth Digit -
  // Enter a number and have the program generate PI up to that many decimal places.
  // Keep a limit to how far the program will go.
  calculatePi = n => {
    //Input too long or not a number, default to 30
    if (n === undefined || n > 30) {
      n = 30;
    } else n = 2;
    const piVal = (16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)).toFixed(n);
    console.log("The Pi value till " + n + "th place is: " + piVal);
    this.setState({ output: piVal });
  };

  fibonnacci = n => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <label>
              Enter the nth digit for Pi value.
              <input
                name="Num"
                type="text"
                value={this.state.digit}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button
              onClick={this.calculatePi}
              className="btn btn-secondary btn-m"
            >
              calculatePi
            </button>
          </p>
        </header>
        <h1>{this.state.output}</h1>
      </div>
    );
  }
}

export default PiCal;
