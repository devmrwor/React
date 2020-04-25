import React from 'react';

const Validation = (props) => {
    let validationMessage;
    if(props.inputLength >= 5) {
        validationMessage = (<p>Text long enough!</p>)
    }
    else {
        validationMessage = (<p>Text too short!</p>)
    }
    return (
        <b>{ validationMessage }</b>
    )
}

export default Validation