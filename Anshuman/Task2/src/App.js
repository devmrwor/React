import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// STATE MANAGEMENT

class App extends Component{

  state = {
    inputValue : ''
  };

  inputChangedHandler = (event) =>{
    this.setState({
      inputValue: event.target.value 
    })
  }

  deleteEventHandler = (index) =>{

    const text = this.state.inputValue.split('');

    text.splice(index,1);

    const updatedText = text.join('');

    this.setState({
      inputValue: updatedText
    });


  }
  
  render(){

    // RENDERING LIST

    let charList = this.state.inputValue.split('').map((ch,index)=>{
      return (
        <Char clicked={this.deleteEventHandler(index)} character={ch} key={index} />
      )
    });


    return (
      <div className='App'>
        <h1>React App</h1>
        <h2>Track Your todo List</h2>
        <h3>Omit the things that are done!</h3>
        <input type='text' onChange={this.inputChangedHandler} value={this.state.inputValue} />
        <br></br>
        <Validation inputLength={this.state.inputValue.length}/>
        {charList}
      </div>
    )
  }
}

export default App;
