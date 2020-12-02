import {useState} from 'react';
import './App.css';

let a = 0, b = 0;

function App() {
  const [answer, setAnswer] = useState(0)

  function handleA(e){
    a = e.target.valueAsNumber;
    setAnswer(a*b)
  }

  function handleB(e){
      b = e.target.valueAsNumber;
    setAnswer(a*b)
  }

  return (
    <div className="App">
      <input type='number' onInput={handleA}></input>
     X
      <input type='number' onInput={handleB}></input>
     =
      <div className='results'>{answer}</div>
    </div>
  );
}

export default App;
