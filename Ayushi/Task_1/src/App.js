import React from "react";
import "./App.css";
import Person from "./Person.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Person name="Ayushi" />
      </div>
    );
  }
}
export default App;
