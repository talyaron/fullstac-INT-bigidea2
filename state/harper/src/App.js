import {useState} from 'react';
import logo from './logo.svg';
import './App.css';


let counter=0;

function App() {
  const [counter, setCounter]=useState(0);
  const [text, setText]=useState('');
  const [color,setColor]=useState('#282c34');

  function handleClick(e){
    setCounter(counter+1);
    console.log('click', counter);
  }
  function handleInput(e){
    const input=e.target.value;
    setText(input);
  }

  function handleColor(e){
    const color=e.target.value;
    setColor(color);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <p>Harper's app</p>
        <button onClick={handleClick}>Add</button>
        <p>Added {counter} times</p>
        <input type="text" placeholder='write some text' onKeyUp={handleInput}/>
        <input type="color" onChange={handleColor}/>
        </header>
        </div>
  );
}

export default App;
