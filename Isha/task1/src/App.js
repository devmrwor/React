import React from "react";
import "./App.css";
import Person from "./Person";

class App extends React.Component{
	render(){
		return(
			<div className = "App">
			<Person name="Isha" about="Learning React"/>
			</div>
	  );
	}

}
export default App;
