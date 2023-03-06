import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Devender'
      }
      console.log('LifeCycle Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifeCycle shouldcomponent')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycle getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('LifeCycle componentDidUpdate')
    }

    changestate = ()=> {
        this.setState({
            name: 'SuccessFully Change name'
        })
    }


  render() {
      console.log('LifeCycle render');
    return (
      <div>
        <div>LifeCycle</div>
        <buttton type='btn' onClick={this.changestate}>Click me!</buttton>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycle