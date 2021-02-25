import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Map } from 'immutable';
import './journal.css';
//import View Journal, import firebase

class journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEntrys: [],
            entrys: Map(),
            entryID: 0,
            entryDate: '',
            entryDescription: '',
        };
    }

    delete = (id, field) => {
        this.setState({events: this.state.entrys.delete(id, field)})
    }

    save = (id, field) => {
        this.setState({events: this.state.entryDescription.update(id, (n) => { return Object.assign({}, n, field)})})
    }

    newentryDateFunction = (event) => {
        this.setState({ entryDate: event.target.value });
    }

    newentryDescriptionFunction = (event) => {
        this.setState({ entryDescription: event.target.value });
    }

    //add firebase stuff here: saveEntryInfo, fetchEntrys

//add View Journal Button and Delete Button and Save Button to below
render() {
    return (
        <div>

        <div>
            <h1> Talk about your day! </h1>
        </div>

        <div>
            <p> Date of Entry: </p>
            <input type="text" value={this.state.entryDate} onChange={this.newentryDateFunction} />
          
            <p> Journal Entry: </p>
            <p> Write a journal entry that will be added to your calendar </p>
            <input type="text" value={this.state.entryDescription} onChange={this.newentryDescriptionFunction} />
        </div>

        </div>
        );
    }
}

export default journal;