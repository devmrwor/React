import React from "react";
import "./App.css";
import Person from "./Person";

class App extends React.Component {
  state = {
    person: [
      {
        name: "Tanishq",
        age: "18",
      },
    ],
    showPerson: false,
  };

  show = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.show}>Toggle Cards</button>
        {this.state.showPerson && <Person name="Tanishq" age="18" />}
      </div>
    );
  }
}

export default App;
