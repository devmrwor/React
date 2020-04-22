import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <h3>Name: {this.props.name}</h3>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default Person;
