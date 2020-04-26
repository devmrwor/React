import React from 'react';

// CONDITIONAL RENDERING

const Validation = (props) => {
    let validationMessage = (<p>Text too short!
    </p>);
    

    if(props.inputLength >= 5){
        validationMessage = (<p>Text long enough!</p>);
    }
    
    return(
        <div>
            {validationMessage}
        </div>
    )
}

export default Validation;
