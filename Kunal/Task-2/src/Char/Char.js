import React from 'react';

const Char = (props) => {
    const styles = {
        backgroundColor:'purple',
        display: 'inline-block',
        border: '4px dashed darkviolet',
        color: 'white',
        padding: '16px',
        margin: '20px'
    }
    return (
        <div style={styles} onClick={props.clicked}>
            { props.character }
        </div>
    )
}

export default Char;