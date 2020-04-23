import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';


// STATE MANAGEMENT IN FUNCTION BASED COMPONENTS

const App = () => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Satvik', age: 19 },
      { name: 'Saransh', age: 20 },
    ],
    otherKey: 'random value'
  });

  const switchNameHandler = (newName) => {

    setPersonsState({
      persons: [
        { name: newName, age: 16 },
        { name: 'Rajat', age: 17 }
      ]
    });

  }

  return (
    <div className='App'>
      <h1>React App</h1>
      <p>Look at me I am a class component!</p>
      <button onClick={() => switchNameHandler('Anshuman')}>Switch Names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}

      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />

      {personsState.otherKey}
    </div>

  )


  // 0 th index -> currentState
  // 1st index -> method() -> manage state
  // const [a,b] = arr; -> Destructuring
}

export default App;


// CLASS BASED COMPONENT WE WORKED ON

// class App extends Component {

//   state = {
//     persons: [
//       { name: 'Satvik', age: 19 },
//       { name: 'Saransh', age: 20 },
//     ],
//     otherKey: 'random value'

//   };



//   switchNameHandler = () => {

//     this.setState({
//       persons: [
//         { name: 'Ansh', age: 16 },
//         { name: 'Rajat', age: 17 }
//       ]
//     });

//   }

//   render() {

//     return (
//       <div className='App'>
//         <h1>React App</h1>
//         <p>Look at me I am a class component!</p>
//         <button onClick={this.switchNameHandler}>Switch Names</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         />

//         {this.state.otherKey}
//       </div>
//     );

//   }
// }

// export default App;

