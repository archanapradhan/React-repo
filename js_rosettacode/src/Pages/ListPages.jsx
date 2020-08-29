import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListPages extends Component {
  state = {};
  render() {
    return (
      <div className="my-4">
        <h1>List of Pages</h1>
        <ul>
          <li>
            <Link to="/piCalculator">PI Calculator</Link>
          </li>
          <li>
            <Link to="/fibonacci">Fibonacci</Link>
          </li>
          <li>
            <Link to="/change-return">Change return</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/BasicInputField">InputField</Link>
          </li>
          <li>
            <Link to="/bubble-sort">Bubble Sort</Link>
          </li>
          <li>
            <Link to="/login-backend">login</Link>
          </li>
          <li>
            <Link to="/login-oauth1">login</Link>
          </li>
          <li>
            <Link to="/login-oauth2">login</Link>
          </li>
          <li>
            <Link to="/theme">theme</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListPages;
