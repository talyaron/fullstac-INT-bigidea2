import { useState } from 'react';

import './App.css';





function App() {
  const [counter, setCounter] = useState(0); //state
  const [text, setText] = useState('');

  function handleClick(e) {

    setCounter(counter + 1) //render the DOM again, and set a new value for counter

    console.log('click', counter)
  }

  function handleInput(e){
    const input = e.target.value;
    setText(input)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <p>Tal's App</p>
        <button onClick={handleClick}>Add</button>
        <p>Added {counter} times</p>
        <input type='text' placeholder='write some text' onKeyUp={handleInput} />
      </header>
    </div>
  );
}

export default App;
