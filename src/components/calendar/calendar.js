import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Map } from 'immutable';
import './calendar.css';
//import View Calendar, import firebase

class calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: [],
            events: Map(),
            eventID: 0,
            eventName: '',
            eventDate: '',
            eventDescription: '',
        };
    }

    delete = (id, field) => {
        this.setState({events: this.state.events.delete(id, field)})
    }

    save = (id, field) => {
        this.setState({events: this.state.eventDescription.update(id, (n) => { return Object.assign({}, n, field)})})
    }

    neweventNameFunction = (event) => {
        this.setState({ eventName: event.target.value });
    }

    neweventDateFunction = (event) => {
        this.setState({ eventDate: event.target.value });
    }

    neweventDescriptionFunction = (event) => {
        this.setState({ eventDescription: event.target.value });
    }

    //add firebase stuff here: saveEventInfo, fetchEvents

//add View Calendar Button and Delete Button and Save Button to below
render() {
    return (
        <div>

        <div>
            <h1> Schedule an event for your calendar! </h1>
        </div>

        <div>
            <p> Event Name: </p>
            <input type="text" value={this.state.eventName} onChange={this.neweventNameFunction} />

            <p> Date of Event: </p>
            <input type="text" value={this.state.eventDate} onChange={this.neweventDateFunction} />
          
            <p> Event Description: </p>
            <input type="text" value={this.state.eventDescription} onChange={this.neweventDescriptionFunction} />
        </div>

        </div>
        );
    }
}

export default calendar;