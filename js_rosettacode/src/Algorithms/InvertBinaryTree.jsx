import React, { Component } from "react";
import Tree from "../images/Tree.svg";
import InvertedTree from "../images/InvertedTree.svg";
import _ from "lodash";
class InvertBinaryTree extends Component {
  state = {
    inputTree: {
      left: {
        left: {
          left: { value: 8 },
          right: { right: { value: 5 }, value: 9 },
          value: 1,
        },
        right: { left: { value: 1 }, right: { value: 2 }, value: 3 },
        value: 2,
      },
      right: {
        left: {
          left: { right: { value: 8 }, value: 5 },
          right: { value: 4 },
          value: 6,
        },
        right: { left: { value: 3 }, right: { value: 1 }, value: 9 },
        value: 7,
      },
      value: 4,
    },
    InvertedTree: {},
  };

  // onChangeHandler = (e) => {
  //   this.setState({ inputTree: e.target.value });
  // };

  createTree = (node) => {
    if (node) {
      return (
        <div className="text-center border h3">
          <div className="border">
            <p className="text-info">{node.value}</p>
          </div>

          <div className="d-flex">
            <div className="px-2 mx-auto">{this.createTree(node.left)}</div>
            <div className="px-2 mx-auto">{this.createTree(node.right)}</div>
          </div>
        </div>
      );
    }
    return;
  };

  invertTree = (node) => {
    if (node) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.left) {
        this.invertTree(node.left);
      }
      if (node.right) {
        this.invertTree(node.right);
      }
    }
    return;
  };

  onClickHandler = () => {
    let treeCopy = _.cloneDeep(this.state.inputTree);
    debugger;
    this.invertTree(treeCopy);

    this.setState({ InvertedTree: treeCopy });
    //let invertTree = <div></div>;
  };

  render() {
    const ShowTree = ({ tree }) => {
      return <div>{this.createTree(tree)}</div>;
    };

    //let invertTree = {};

    // if (this.state.invertTree) {
    //   invertTree = <div>{this.createTree(this.state.inputTree)}</div>;
    // }

    // let getTreeData = JSON.parse(JSON.stringify(this.state.inputTree));

    return (
      <div>
        <h1 className="border text-center">Invert Binary Tree</h1>
        <div className="row">
          <img src={Tree} className="col img-fluid" alt="tree"></img>
          <img
            src={InvertedTree}
            className="col img-fluid"
            alt="inverted tree"
          ></img>
        </div>

        <h2 className="my-3 mt-5">Input Binary Tree</h2>
        {/* <textarea
          type="text"
          name="userdata"
          value={getTreeData}
          onChange={this.onChangeHandler}
        ></textarea> */}

        <div className="border">
          <ShowTree tree={this.state.inputTree}></ShowTree>
        </div>

        <div className="my-5">
          <button className="btn btn-info" onClick={this.onClickHandler}>
            Invert Binary Tree
          </button>
        </div>
        {JSON.stringify(this.state.InvertedTree) !== "{}" ? (
          <ShowTree tree={this.state.InvertedTree}></ShowTree>
        ) : null}
      </div>
    );
  }
}

export default InvertBinaryTree;
