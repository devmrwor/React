import React from 'react';
// import Radium from 'radium';

// npm install radium
class Person extends React.Component {


    render() {
        const style = {
            backgroundColor: 'red',
            margin: '20px',
            border: '1px solid black',
            padding: '20px',
            width: '200px',
        }
        
        return (
            <div style={style}>
                <h1 onClick={this.props.click}>{this.props.name}</h1>
                <p>My age is : {this.props.age}</p>
            </div>
        );
    }
}

export default Person;