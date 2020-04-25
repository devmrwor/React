import React from "react";
import "./App.js";

const Validation = (props) => {
  let validationmsg = <p>Text too Short!</p>;

  if (props.inputlength >= 5) {
    validationmsg = <p>Text long enough!</p>;
  }

  return <div>{validationmsg}</div>;
};

export default Validation;
