import React from 'react';
import "./Person.css";

function Person(props) {
  return(
    <div className="content">
      <div className="box box-content">
        <img src={props.img} alt="avatar" />
        <h2>{props.name}</h2>
        <p>Bio: {props.bio}</p> 
      </div>
    </div>  
  );
}

export default Person;