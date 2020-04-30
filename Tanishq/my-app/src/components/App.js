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
        <button onClick={this.show}>Toggle Person</button>
        {this.state.showPerson && (
          <div>
            <Person name="Tanishq" age="18" />
          </div>
        )}
      </div>
    );

    // if (this.state.showPerson) {
    //   person = (
    //     <div>
    //       <Person name="Tanishq" age="18" />
    //     </div>
    //   );
    // }
    // return (
    //   <div className="App">
    //     <button onClick={this.show}>Toggle Cards</button>
    //     {person}
    //   </div>
    // );
  }
}

export default App;
