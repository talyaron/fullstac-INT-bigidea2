import './App.css';
import {useState} from "react";

function App() {
  const [answer, setAnswer] = useState()

  return (
    <div className="App">
      <p id="question">
        <input type="number" name="a" onChange={multiply}/>
        x 
        <input type="number" name="b" onChange={multiply}/>
        = 
        <input readOnly value={answer}/>
      </p>
    </div>
  );

  function multiply(e){
    setAnswer((e.target.parentNode.children.a.value*e.target.parentNode.children.b.value))
  }
}

export default App;
