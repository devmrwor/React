import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Person name="sahilcodes" bio="No Bio, As i took Computer Science." img="https://avatars0.githubusercontent.com/u/37765935?s=460&u=cf2059db80c37025b49500881b66cb76166e310b&v=4" />
      </div>
    );
  }
}

export default App;
