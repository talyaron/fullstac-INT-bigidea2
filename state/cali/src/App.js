import { useState } from 'react';
import logo from './logo.svg';
import './App.css';





function App() {
  const [counter, setCounter] = useState(0); 

  function handleClick(e) {

    setCounter(counter + 1) 

    console.log('click', counter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Tal's App</p>
        <button onClick={handleClick}>Add</button>
        <p>Added {counter} times</p>
      </header>
    </div>
  );
}

export default App;