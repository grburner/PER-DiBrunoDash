import React, { Component } from 'react';

class QuickComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comp1: 0,
            comp2: 0
        }
    }

    render() {

        const {
            comp1,
            comp2
        } = this.state

        return(
            <h2 className="d-flex justify-content-center">{ comp1 } | { comp2 }</h2>
        )
    }
}

export default QuickComp;