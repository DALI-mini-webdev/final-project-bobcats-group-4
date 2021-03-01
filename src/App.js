import React from 'react';
import calendar from "./components/calendar/calendar";
import journal from "./components/journal/journal";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import JournalBoard from './components/JournalBoard';
import firebase from './firebase/index';


function App() {

  console.log(firebase);
  console.log(firebase.db);
    return (
      <div className = "App">
        <Navbar />
        <JournalBoard/>
        
      </div>
    );


}

export default App;
