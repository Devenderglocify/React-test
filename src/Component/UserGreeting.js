import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor() {
      super()
    
      this.state = {
         isLoggedin: false
      }
    }
  render() {

    return this.state.isLoggedin ? (<div>Welcome Devender</div>) : (<div>Welcome Guest!</div>)
    // let message 
    // if (this.state.isLoggedin) {
    //     message = <div>Welcome Devender</div>
    // }
    // else {
    //     message = <div>Welcome Guest!</div>
    // }
    // return <div>
    //     {message}
    // </div>
    // if (this.state.isLoggedin){
    //    return <div>Welcome Devender!</div>
    // }
    // else {
    //     return <div>Welcome Guest!</div>
        
    // }
    // return (
    //   <div>
    //     <div>Welcome Devender!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting