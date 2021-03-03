import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Map } from 'immutable';
import './calendar.css';
import EventPost from './Eventpost';
import firebase from './firebase/index';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
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

    saveEvent = () => {
        console.log("savebutton")
        firebase.db.collection('Event').add({
            name: this.state.eventName,
            date: this.state.eventDate,
            description: this.state.eventDescription,
            id: this.state.eventID
        }).then(ref => {
            console.log('document reference id', ref.id);
            this.setState({
                id: this.state.id + 1
            })
        }).catch((e) => {
            console.log(e);
        })
    };

    neweventNameFunction = (event) => {
        this.setState({ eventName: event.target.value });
    }

    neweventDateFunction = (event) => {
        this.setState({ eventDate: event.target.value });
    }


    neweventDescriptionFunction = (event) => {
        this.setState({ eventDescription: event.target.value });
    }

    fetchEvents = () => {
        console.log("fetchbutton")
        const eventList = [];
        firebase.db.collection('Event').get()
            .then(query => {
                query.forEach(doc => {
                    console.log(doc.data());
                    eventList.push(doc.data());
                })
            })
            .then(() => {
                this.setState({
                    allEvents: eventList
                }).catch((e) => {
                    console.log(e);
                })
            })
      }

//added firebase view and add event functions
//still to-do: add "time" field since right now we just have date
//idea: use a package to do a drop-down date thing. I will look into this and try to find a package for this purpose
render() {
    const allEvents = this.state.allEvents.map((Event) => {
        return (
            <EventPost
                name={Event.name}
                date={Event.date}
                description={Event.description}
            />
        )
    })
    return (
        <body>
        <div>

        <div>
            <h1> Schedule an event for your calendar! </h1>
        </div>

        <div>
            <p> Event Name: </p>
            <input type="text" value={this.state.eventName} onChange={this.neweventNameFunction} />

            <p> Date of Event: </p>
            <input type="text" value={this.state.eventDate} onChange={this.neweventDateFunction} />
            <Calendar />

            <p> Event Description: </p>
            <input type="text" value={this.state.eventDescription} onChange={this.neweventDescriptionFunction} />

            <button onClick={this.saveEvent}>Save</button>
        </div>
        <div className='allEvents'>
                    <button onClick={this.fetchEvents}>View Events</button>
                    {allEvents}
        </div>
        </div>
        </body>
        
        );
    }
}

export default calendar;