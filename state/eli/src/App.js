import { useState } from 'react';

import './App.css';





function App() {
  const [counter, setCounter] = useState(0); //state
  const [text, setText] = useState('');
  const [color, setColor] = useState('red')

  function handleClick(e) {

    setCounter(counter + 1) //render the DOM again, and set a new value for counter

    console.log('click', counter)
  }

  function handleInput(e){
    const input = e.target.value;
    setText(input)
  }

  function handleColor(e){
    setColor(e.target.value)

    document.body.style.backgroundColor = color
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <p>Eli's App</p>
        <button onClick={handleClick}>Add</button>
        <p>Clicked {counter} times</p>
        <input type='text' placeholder='write some text' onKeyUp={handleInput} />
        <input type="color" onChange={handleColor}/>
      </header>
    </div>
  );
}

export default App;

