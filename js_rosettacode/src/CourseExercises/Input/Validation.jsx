import React from "react";

const validation = props => {
  let validationMessage = "Text too short";

  if (props.getTextLength >= 15) {
    validationMessage = "Text long enough";
  }

  return (
    <div className="d-inline-flex p-2">
      <p className="h4 bg-info">{validationMessage}</p>
    </div>
  );
};

export default validation;
