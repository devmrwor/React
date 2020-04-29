import React from 'react';
const Char=(props)=>{
 const   styles={
        display:'inline-block',
        padding:'20px',
        margin:'15px',
        border:'1px solid black',
        background:"lightpink",
    }
    return(
        <div style={styles} onClick={props.clicked}>
            {props.character}
        </div>
    )
}
export default Char;