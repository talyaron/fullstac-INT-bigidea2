import { useState } from 'react';
import logo from './logo.svg';
import './App.css';





function App() {
  const [counter, setCounter] = useState(0); 
  const [text, setText] = useState('');

  function handleClick(e) {

    setCounter(counter + 1) 

    console.log('click', counter)
  }

  function handleInput(e){
    const input = e.target.value;
    setText(input)
  }

  return (
    <div className="App">
      <header>
        <p>Cali's App</p>
        <button onKeyDown={handleInput}>Add</button>
        <p>Added {counter} times</p>
        <input type='text' placeholder='write here' onClick={handleClick} />
        <input type='color' onClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;