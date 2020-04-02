import React, { Component } from "react";

const userInput = props => {
  const spanstyle = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid grey",
    padding: "3px",
    cursor: "pointer"
  };

  return (
    <div>
      <label>
        Enter a user Name
        <input type="text" onChange={props.changed} value={props.name} />
        <p>
          Hi I'm {props.name}. I am working on an exercise here to take inputs
          from input text and display the content. I am currently listening to
          A.R Rehman songs.
        </p>
      </label>
    </div>
  );
};

export default userInput;
