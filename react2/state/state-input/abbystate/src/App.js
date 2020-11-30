import './App.css';
//first step to useState: 
import { useState } from 'react';

function App() {
const [text, setText] = useState('');
  const [paragraphs, setParagraphs] = useState([])
  const [colors, setColors] = useState([]);

  function handleInput(e) {
    console.log(e.target.value)
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.children.input.value);
   let userInput = e.target.children.input.value;
    setParagraphs([...paragraphs, userInput]);
    e.target.children.input.value = ''
  }

  function handleColor(e) {
    e.preventDefault()
    console.log(e.target.value)
    let colorInput = e.target.value;
    setColors([...colors, colorInput])

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter text' name='input' onKeyUp={handleInput} />
        <input type='color' name='inputColor' onChange={handleColor} />
        <input type='submit' value='Submit' />
      </form>

      <p>{text}</p>
      <h3>{text}</h3>

      {paragraphs.map((paragraph, index) => {
        return (<p key={index}>{paragraph}</p>)
      })}

      {colors.map((color, index) => {
        return (<div key={index} style={{backgroundColor: color}}>{color}</div>)
      })}


    </div>
  );
}
export default App;
