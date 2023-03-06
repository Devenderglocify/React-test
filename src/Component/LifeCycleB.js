import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Devender'
      }
      console.log('LifeCycle Constructor B')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle getDerivedStateFromProps B')
        return null
    }
    componentDidMount() {
        console.log('LifeCycle B')
    }
    shouldComponentUpdate() {
        console.log('LifeCycleB shouldcomponent')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
  render() {
      console.log('LifeCycle render B');
    return (
      <div>LifeCycle</div>
    )
  }
}

export default LifeCycleB