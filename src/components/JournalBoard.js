import React, { Component } from 'react';
import {Map} from 'immutable';
import JournalPosting from './JournalPosting';
class JournalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: Map(),
      jounralID: 0,
      newDateOfEntry: '',
      newJournalEntry: '',
    }
  }




 delete =(id) => {
   this.setState({journal: this.state.journal.delete(id)})
 }

 save = (id, field) => {
   this.setState({journal:this.state.journal.update(id, (n) => {return Object.assign({}, n, field);})})
 }

 newDateOfEntryFunction = (event) => {
    this.setState({ newDateOfEntry: event.target.value });
  }
  newJournalEntryFunction = (event) => {
    this.setState({ newJournalEntry: event.target.value });
  }


  saveJournalInfo = () => {
    let journalData = {
      date: this.state.newDateOfEntry,
      entry: this.state.newJournalEntry,
    }
    this.setState({
      journal: this.state.Journal.set(this.state.journalID, journalData),
      journalID: this.state.journalID + 1
    });

  }
 
 
  render() {
   const allJournal = this.state.journal.entrySeq().map(
     ([id, journal]) => {
       return ( 
         <JournalPosting 
            save={this.save}
            delete={this.delete}
            date={journal.date}
            entry={journal.entry}
            id={id}
         />
       );  
     }
   );
   return (
     <div>
       <p> Talk about your day! </p>
       {allJournal}
       <p>Date of entry:</p>
       <input type="text" value={this.state.newDateOfEntry}
       onChange={this.newDateOfEntryFunction}/>

       <p>Journal entry: Write a journal entry that will be added to your calendar</p>
       <input type="text" value={this.state.newJournalEntry}
       onChange={this.newJournalEntryFunction}/>

       <button onClick={this.saveJournalInfo}>Save!</button>
     </div>
   );
 }
}
export default JournalBoard;