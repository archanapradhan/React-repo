import React, { Component } from "react";

class Fibonacci extends Component {
  state = {
    input: "",
    output: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  fibonacci = n => {
    if (n === 1) {
      return [0, 1];
    } else {
      var s = this.fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };

  getLastOfFibonacciSeries = (n, specific) => {
    if (n === undefined) {
      n = 1;
    }
    var series = this.fibonacci(n);
    if (specific === undefined) {
    } else {
      var count = series.length;
      series = series.filter(x => x > series[count - 1 - specific]);
    }
    series = series.map(x => " " + x + "|");
    this.setState({ output: series });
  };

  render() {
    return (
      <div>
        <label>
          Enter a number till you would like to generate fibonacci series value.
          <input
            name="limit"
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Generate the whole series{" "}
          <button
            onClick={() => this.getLastOfFibonacciSeries(this.state.input - 1)}
          >
            Generate
          </button>
        </label>
        <br />{" "}
        <label>
          show the last five in the series{" "}
          <button
            onClick={() =>
              this.getLastOfFibonacciSeries(this.state.input - 1, 5)
            }
          >
            Generate
          </button>
        </label>
        <h1>Output:{this.state.output}</h1>
      </div>
    );
  }
}

export default Fibonacci;
