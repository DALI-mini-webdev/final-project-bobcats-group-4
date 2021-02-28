import React from 'react';
import './App.css';
import JournalBoard from './components/JournalBoard';
import firebase from './firebase/index';


function App() {
  console.log(firebase);
  console.log(firebase.db);
    return (
      <div className = "App">
        <JournalBoard/>
        
      </div>
    

    );
}

export default App;
