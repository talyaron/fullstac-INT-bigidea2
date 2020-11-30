import {useState} from 'react'
import './App.css';

function App() {

  const [text, setText] = useState('')

  function handleInput(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <input type='text' placeholder='Type in your text' onKeyUp={handleInput}/>
      <p>{text}</p>
    </div>
  );
}

export default App;
