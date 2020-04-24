import React from 'react';
import Person from './Person/Person';
import './App.css';


class App extends React.Component{
      render (){return(
      <div className="App">
        <Person name="Charu" age="18"/>
        <Person name="Sanjana" age="18"/>
      </div>
    
  );}
}

export default App;