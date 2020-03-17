import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // };

  //--------Handling events and binding event handlers------------
  //Every handler should be defined in the constructor
  //following way of writing event handler gets the code messy so use arrow functions instead
  //
  /*  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); //binding the current object to the handler
  }
  handleIncrement() {
    console.log("Increment Clicked", this);
  } */

  //Arrow function
  //Arrow functions dont bind that this keyword they inherit it
  /*   handleIncrement = () => {
    console.log("Increment Clicked", this);
  }; */

  //Updating the state, Passing Event Arguments
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 }); // this method tells react to get the DOM in sync with the virtual DOM
  // };

  //

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  /* // This code was before we passed whole counter object as "counter={counter}"" in Counters.jsx
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }*/

  /* //Updating the state, Passing Event Arguments
  handleIncrement = product => {
    //this.state.count++; //wont work
    console.log(product);
    this.setState({ value: this.state.value + 1 }); // this method tells react to get the DOM in sync with the virtual DOM
  };
  //-----Rendering classes,lists dynamically. ,handling events  code starts
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  //-----Rendering classes,lists dynamicall code ends
 */

  //-----Conditional Rendering code starts------
  /*  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  } */

  //-----Conditional Rendering code ends------
  getBadgeClasses() {
    // debugger;
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
