import './App.css';
//first step to useState: 
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [paragraphs, setParagraphs] = useState([])
  const [colors, setColors] = useState([]);

  function handleInput(e) {
    // e is for event 
    console.log(e.target.value)
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.children.input.value);
    let userInput = e.target.children.input.value;
    setParagraphs([...paragraphs, userInput]);
    // ... takes the previous array and adds to it --> adds the userInput variable (inputted text, and it's update bc of setText)
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
//when take an array and want to convert it to <p> or <div> then you use map
// want to take information and make a paragraph for each --> paragraphs.map, element is the paragrpah, index is number in array
//then from all this data, it makes an array and returns a paragraph with just {paragraph} not {paragraphs} and it returns it in a <p></p>
//and the key of it is its index bc it is an array 
//{paragraphs} is an array, map means it goes through all of them, like for each, index is its number in array 
// for each element in the dom it has a key 
export default App;
