import { useState } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0); //state
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');

  function handleClick(e) {

    setCounter(counter + 1) //render the DOM again, and set a new value for counter

    console.log('click', counter)
  }

  function handleInput(e){
    const input = e.target.value;
    setText(input)
  }

  function handleColor(e){
    const color = e.target.value;
    console.log(color)
    setColor(color);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <p>Abby's App</p>
        <button onClick={handleClick}>Add</button>
        <p>Added {counter} times</p>
        <input type='text' placeholder='write some text' onKeyUp={handleInput} />
        <input type="color" onClick={handleColor} />
      </header>
    </div>
  );
}

export default App;
