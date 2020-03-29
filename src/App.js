import React, { Component } from 'react';
import './App.css';
import Counters from './Counters';

class App extends Component {
  state ={}
  render() { 
    return ( 
    <div className="App">
      <Counters />
    </div>
     );
  }
}
 
export default App;