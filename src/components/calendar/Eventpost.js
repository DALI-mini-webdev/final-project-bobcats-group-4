import React, { Component } from 'react';

class Eventpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.date}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Eventpost;