
import './App.css';
import {useState} from 'react';

function App() {
  const [answer, setAnswer] = useState(0)
  let numberOne = 0
  let numberTwo = 0

  /*function handleMultiplication(e) {
    e.preventDefault();
    numberOne = e.target.children.numberOne.valueAsNumber;
    numberTwo = e.target.children.numberTwo.valueAsNumber;
    let answer = numberOne * numberTwo
    console.log(numberOne + " x " + numberTwo + " = " + answer)
    setAnswer(answer)
  }*/

  function handleNumberOne(e) {
    numberOne = e.target.valueAsNumber;
    setAnswer(numberOne * numberTwo)

  }

  function handleNumberTwo(e) {
    numberTwo = e.target.valueAsNumber; 
    setAnswer(numberOne * numberTwo)
  }

  return (
    <div className="App">
      <input type='number' placeholder='enter a number' onInput={handleNumberOne} />x
      <input type='number' placeholder='enter a number' onInput={handleNumberTwo} /> =
      <div id='answer'>{answer}</div>
    </div>
  );
}

//       <form onChange={handleMultiplication}>
//<input type='number' name='numberOne' placeholder='enter number' /> x <input type='number' name='numberTwo' placeholder='enter number' />={answer}

export default App;
