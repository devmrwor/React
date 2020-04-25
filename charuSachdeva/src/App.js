import React from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css'
class App extends React.Component{
  state={
      inputString:''
  };
  
  inputChangeHandler=(event)=>{
      this.setState({
        inputString:event.target.value
      })
  }
  deletionHandler=(index)=>{
    const Text=this.state.inputString.split('');
    Text.splice(index,1);
    const updatedText=Text.join('');
    this.setState({
      inputString:updatedText
    });
  }
  render(){
    
    let charlist=this.state.inputString.split('').map((ch,index)=>{
      return(
      <Char clicked={()=>this.deletionHandler(index)} character={ch} key={index}/>
      )
    }

    );
    return(
      <div className="App">
        <h1>React App</h1>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.inputString}></input>
        <Validation inputLength={this.state.inputString.length}/>
        {charlist}
      </div>

    )
  }
}
export default App;
