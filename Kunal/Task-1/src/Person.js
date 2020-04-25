import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className = "Person">
                <h1>Hi , i'm { this.props.name } and i'm {this.props.age } years old.</h1>
            </div>
        )
    }
}

export default Person;