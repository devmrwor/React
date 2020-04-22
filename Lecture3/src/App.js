import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {

  state = {
    person : [
      {name: 'Saransh', age: 19},
      {name: 'Satvik', age: 20},
    ],
    showPerson: true
  }

  switchNameHandler = () => {
    // Do not directly manipulate state
    // this.state.person[0].name = 'Saransh Dawra';
    this.setState({
      person : [
        {name: 'Saransh Dawra', age: 19},
        {name: 'Satvik Chachra', age: 20},
      ],
      showPerson: !this.state.showPerson // true -> false false -> true
    })
  }

  ageChangeHandler = () => {
    this.setState({
      person : [
        {name: 'Saransh Dawra', age: 22},
        {name: 'Satvik Chachra', age: 22},
      ],
    })
  }

  render() {

    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.ageChangeHandler}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        </div>
      );
    }    

    return  (
      <div className="App">
      <button onClick={this.switchNameHandler}>Toggle Person</button>
      {persons}
    </div>
    );
  }
}

export default App;
