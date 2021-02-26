import React from 'react';
import Calendar from "./components/calendar/calendar";
import journal from "./components/journal/journal";
import './App.css';
import firebase from 'firebase'

function App() {
    console.log(firebase);
    console.log(firebase.db);
  return (
    <div className="App">
       <Calendar />
       <p test />
    </div>
  )
}

export default App;
