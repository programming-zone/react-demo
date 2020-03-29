import React, { Component } from 'react';
import './App.css';
import Counter from './counter';

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
   }
  render() { 
    return ( 
    <div className="App">
      {this.state.counters.map(counter => (
        <Counter key={counter.id}  value={counter.value} id={counter.id} />
      ))}
    </div>
     );
  }
}
 
export default App;