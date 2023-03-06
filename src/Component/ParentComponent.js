import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(chils) {
        alert(`Hello ${this.state.parentName} from child`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetparent} />
      </div>
    )
  }
}

export default ParentComponent