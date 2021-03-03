import React from 'react';
import Calendar from "./components/calendar/calendar";
import journal from "./components/journal/journal";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import logoPic from "./components/images/Add a heading.png";
import JournalBoard from './components/JournalBoard';
// import firebase from './firebase/index';
// import firebase from 'firebase'

function App() {
//     console.log(firebase);
//     console.log(firebase.db);
  return (
      <div className="App">
          <Navbar />
          <img src = {logoPic} width={330} heigth ={410} /> 
          <JournalBoard/>
        <Calendar />
      </div>
  )
}

export default App;
