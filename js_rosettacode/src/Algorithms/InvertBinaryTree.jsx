import React, { Component } from "react";
import Tree from "../images/Tree.svg";
import InvertedTree from "../images/InvertedTree.svg";

class InvertBinaryTree extends Component {
  state = {
    inputTree: {
      left: {
        left: { left: { value: 8 }, right: { value: 9 }, value: 1 },
        right: { left: { value: 1 }, right: { value: 2 }, value: 3 },
        value: 2,
      },
      right: {
        left: { left: { value: 5 }, right: { value: 4 }, value: 6 },
        right: { left: { value: 3 }, right: { value: 1 }, value: 9 },
        value: 7,
      },
      value: 4,
    },
  };

  onChangeHandler = (e) => {
    this.setState({ inputTree: e.target.value });
  };

  getTreeData = () => {
    debugger;
    console.log("json", JSON.stringify(this.state.inputTree));
    return JSON.stringify(this.state.inputTree);
  };

  createTree = (node) => {
    return (
      <div>
        <div>
          <p className="text-center border">{node.value}</p>
        </div>

        <div className="row">
          <div className="col">
            <p className="text-center border">{node.left.value}</p>
          </div>
          <div className="col">
            <p className="text-center border">{node.right.value}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let showTree = <div>{this.createTree(this.state.inputTree)}</div>;

    return (
      <div>
        <h1>Invert Binary Tree</h1>
        <div className="row">
          <img src={Tree} className="col img-fluid" alt="tree"></img>
          <img
            src={InvertedTree}
            className="col img-fluid"
            alt="inverted tree"
          ></img>
        </div>

        <label>Change the numbers in the object literal</label>
        <input
          type="text"
          name="userdata"
          value={this.getTreeData}
          onChange={this.onChangeHandler}
        ></input>
        <div>
          <p></p>
        </div>
        <div>{showTree}</div>

        <div>
          <button className="btn btn-info">Invert Binary Tree</button>
        </div>
      </div>
    );
  }
}

export default InvertBinaryTree;
