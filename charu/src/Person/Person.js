import React from 'react'
function Person(props)
{
    return(
        <div>
        <h1>{props.name}</h1>
        <p>My age is {props.age} years.</p>
        </div>
    );
}
export default Person;