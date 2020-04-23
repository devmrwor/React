import React from 'react';
import Person from './Person/Person';
import './App.css';

// Rendering Lists

class App extends React.Component {

  state = {
    persons: [
      { name: 'Saransh', age: 19 },
      { name: 'Satvik', age: 20 },
    ],
    showPerson: true
  }

  switchNameHandler = () => {
    // Do not directly manipulate state
    // this.state.person[0].name = 'Saransh Dawra';
    this.setState({
      persons: [
        { name: 'Saransh Dawra', age: 19 },
        { name: 'Satvik Chachra', age: 20 },
      ],
      showPerson: !this.state.showPerson // true -> false false -> true
    })
  }

  

  ageChangeHandler = () => {
    this.setState({
      persons: [
        { name: 'Saransh Dawra', age: 22 },
        { name: 'Satvik Chachra', age: 22 },
      ],
    })
  }

  // Rendering Lists making it dynamic, observe the return statement

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.agse} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;

// Code replaced from return statement

{/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.ageChangeHandler}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> */}