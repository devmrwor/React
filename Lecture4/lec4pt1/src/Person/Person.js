import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Hi! {props.name}. You are {props.age} years old.</p>
        </div>
        
    );
}

export default person;