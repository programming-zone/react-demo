import React, { useState } from 'react';
import './App.css';

// import Tweet from './Tweet';

// const sayHello =  () => {
//   console.log("Hello");
// };

function App() {
  const [count,setCount] = useState(0);
  const [isRed,setRed] =useState(false);

  const increase = () => {
    setCount(count+1);  
    setRed(!isRed);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {/* <Tweet name="Injamul" message="first post." likes="100" />
      <Tweet name="Injamul" message="first post." likes="100" />
      <Tweet name="Injamul" message="first post." likes="100" />
      <Tweet name="Injamul" message="first post." likes="100" /> */}
      <h1 className={isRed ? "red" : ""}>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
