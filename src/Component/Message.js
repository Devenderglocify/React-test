import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
            this.state = {
                message: 'Welcome in state'
            
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thanks for change State!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1> 
                <button onClick={()=> this.changeMessage()}>Change state</button>  
            </div>
        )
    }
}

export default Message