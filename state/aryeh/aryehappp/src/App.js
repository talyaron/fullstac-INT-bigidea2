import { useState } from 'react';
import logo from './logo.svg';
import './App.css';





function App() {
  const [counter, setCounter] = useState(0); //state
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  function handleClick(e) {

    setCounter(counter + 1) //render the DOM again, and set a new value for counter

    console.log('click', counter)
  }
  function handleColor(e) {
    const input = e.target.value;
    setColor(input);
    console.log(input)
  }
  function handleInput(e){
    const input = e.target.value;
    setText(input);
  }
  return (
    <div className="App" style={{backgroundColor: `${color}`}}>
    
      <header className="App-header">
        <h1>{text}</h1>
        <p>Aryeh's App</p>
        <button onClick={handleClick}>Add</button>
        <p>Added {counter} times</p>
        <input type='text' onKeyUp={handleInput}/>
        <input type='color' onChange={handleColor}/>
      </header>
    </div>
  );
  }

export default App;

