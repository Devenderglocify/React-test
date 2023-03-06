import React from "react";

const Hello = ()=> {
    
    // return (
    //     <div>
    //         <h1>Hello Devender</h1>
    //     </div>
    // )

    //Without JSX

    return React.createElement('div', 
    {id: "hello", className: "world"}, 
    React.createElement('h1', null, 'Hello Devender'))
}

export default Hello