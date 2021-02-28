import React from 'react';
import calendar from "./components/calendar/calendar";
import journal from "./components/journal/journal";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import logoPic from "./components/images/Add a heading.png";

function App() {

  return (
    <div className="App">
     <Navbar />
     <img src = {logoPic} width={330} heigth ={410} /> 
    </div>
  );
}

export default App;
