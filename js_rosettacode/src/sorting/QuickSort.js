import React, { Component } from "react";

class QuickSort extends Component {
  state = {
    input: "",
    sorted: "",
  };

  inputChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  getSortedArray = (inputArr) => {
    const sorted = this.quickSort(inputArr).join("  ,  ");
    this.setState({ sorted: sorted });
  };

  quickSort = (inputArr) => {
    let length = inputArr.length;
    let sortedArr = [];
    let pivot = inputArr[length - 1];
    let arrLeft = [];
    let arrRight = [];

    for (let i = 0; i < length - 1; i++) {
      if (inputArr[i] < pivot) {
        arrLeft.push(inputArr[i]);
      } else {
        arrRight.push(inputArr[i]);
      }
    }

    if (arrLeft.length !== 0) {
      sortedArr = [...this.quickSort(arrLeft)];
    }

    sortedArr.push(pivot);

    if (arrRight.length !== 0) {
      sortedArr = [...sortedArr, ...this.quickSort(arrRight)];
    }
    return sortedArr;
  };

  swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  render() {
    const inputArr = this.state.input.split(",").map(Number);
    return (
      <div>
        <label>Please enter a series of numbers separated by a comma</label>
        <div className="my-3">
          <input
            type="text"
            name="quicksort"
            onChange={this.inputChangeHandler}
            value={this.state.input}
          ></input>
        </div>
        <div className="my-3">
          <button
            className="btn btn-info"
            onClick={() => this.getSortedArray(inputArr)}
          >
            Quick Sort
          </button>
        </div>
        <div className="my-3">
          <h3>Sorted in ascending order </h3>
          <h2>{this.state.sorted}</h2>
        </div>
      </div>
    );
  }
}

export default QuickSort;
