import React, { Component } from "react";
import "./Person.css";

class person extends Component {
  render() {
    return (
      <div className="Person">
        <h1>Hey! I'm {this.props.name}</h1>
        <p>Happy learning React..</p>
      </div>
    );
  }
}

export default person;
