import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, work} = this.props
        return <h1>Hello my name {name} and I'm working as {work}</h1>
    }
}

export default Welcome