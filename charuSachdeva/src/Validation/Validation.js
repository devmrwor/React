import React from 'react';
class Validation extends React.Component{
    
    
    render(){
        let message=(<p>Too short!</p>);
    if(this.props.inputLength>=5)
    message=(<p>Long enough!</p>)
        return(
            <div>{message}</div>
    
        );
    }
}
export default Validation;