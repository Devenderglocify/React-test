import React from 'react';

//Simple Javascript function
// function Greet() {
//     return <h1>Hello world! my name is Devender!</h1>
// }

const Greet = props =>  {
    const {name, work} = props
    console.log(props)
    return(
        <div>
            <h1>Hello world! my name is {name}! worked as {work}</h1>
            {props.children}
        </div>
    )    
} 
export default Greet       