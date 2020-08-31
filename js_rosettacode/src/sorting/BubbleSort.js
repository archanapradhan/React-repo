import React, { Component } from "react";

class BubbleSort extends Component {
  state = {
    enable: false,
    userInput: "",
    sorted: "",
  };

  swap = (items, a, b) => {
    let temp = items[a];
    items[a] = items[b];
    items[b] = temp;
  };

  onChangeHandler = (e) => {
    this.setState({ userInput: e.target.value });
    this.setState({ enable: true });
  };

  bubbleSortHandler = () => {
    let arr = this.state.userInput.split(",").map(Number);
    if (arr.length !== 0) {
      for (let index = 0; index < arr.length; index++) {
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] > arr[index + 1]) {
            this.swap(arr, index, index + 1);
          }
        }
      }
    }
    this.setState({ sorted: arr.join(" , ") });
  };

  bubbleSort2Handler = () => {
    let arr = this.state.userInput.split(",").map(Number);
    let flag = true;
    if (arr.length !== 0) {
      while (flag) {
        flag = false;
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] > arr[index + 1]) {
            this.swap(arr, index, index + 1);
            flag = true;
          }
        }
      }
    }
    this.setState({ sorted: arr.join(" , ") });
  };

  render() {
    return (
      <div>
        <label>Please enter a series of numbers separated by a comma</label>
        <div className="my-2">
          <input
            type="text"
            name="input"
            onChange={this.onChangeHandler}
            value={this.state.userInput}
          ></input>
        </div>
        <div className="my-2">
          <button
            className="btn btn-info"
            onClick={this.bubbleSortHandler}
            disabled={!this.state.enable}
          >
            Bubble Sort
          </button>
        </div>

        <h1>Sorted in Ascending order</h1>
        <h2>{this.state.sorted}</h2>
      </div>
    );
  }
}

export default BubbleSort;
