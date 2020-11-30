import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [paragraphs, setParagraphs] = useState([]);
  const [colors, setColors] = useState([]);

  function handleInput(e) {
    setText(e.target.value);

   
  }

  function handleColors(e) {
    console.log(e.target.value)
   
    setColors([...colors, e.target.value])
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.children.input.value)
    let userInput = e.target.children.input.value;
    setParagraphs([...paragraphs, userInput])

  }

  return (
    <div className="App">
      <h2>Cali's App</h2>
      <form onSubmit={handleSubmit}>
        <input type='color' placeholder='put in your text' name='input' onChange={handleColors} />
        <input type='submit' value='submit' />
      </form>
      <p>{text}</p>
      {colors.map((color, index) => {
        return (<div key={index} style={{background:color}} >{color}</div>)
      })}
    </div>
  );
}

export default App;
