import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  };

  inputChangeHandler = (event) => {
    this.setState( {
      inputValue: event.target.value
    })
  }
  deleteHandler = (index) => {
    const text = this.state.inputValue.split('')
    text.splice(index, 1)
    const updatedText = text.join('');
    this.setState( {
      inputValue: updatedText
    })
  }


  render() {
    let charList = this.state.inputValue.split('').map((ch, index) => {
      return (
        <Char clicked={()=>this.deleteHandler(index)} character={ch} key={index}/>
      )
    });
    return (
      <div className='App'>
        <h1>React App</h1>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.inputValue}/>
        <Validation inputLength={this.state.inputValue.length} />
        { charList }
      </div>
    )
  }
}

export default App;
