<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import Counters from './Counters';

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
   }
   handleIncrement = (counter) => {
     const counters =[...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
   };
   handleReset = () => {
     const counters = this.state.counters.map(c => {
       c.value =0;
       return c;
     });
     this.setState({counters});
   };

   handleDelete = (counterId) => {
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters});
   };

  render() { 
    return (
      <React.Fragment>
      <NavBar 
      totalCounters = {this.state.counters.filter(c=> c.value > 0).length} 
       />
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete} />
      </main>
      </React.Fragment> 
     );
  }
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
>>>>>>> 249e4d0611a6ba1c703a9eeb18279da3d64ce289
}
 
export default App;