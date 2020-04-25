import React from "react";
import "./App.js";

const Char = (props) => {
  const styles = {
    backgroundColor: "rgb(95, 54, 190)",
    color: "white",
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
  };
  return (
    <div style={styles} onClick={props.clicked}>
      {props.character}
    </div>
  );
};
export default Char;
