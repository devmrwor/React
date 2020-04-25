import React from "react";
import "./App.css";
import Person from "./Person";

class App extends React.Component{
	render(){
		return(
			<div className = "App">
			  <Person name="Kunal" age = "19"/>
			</div>
	  );
	}

}
export default App;