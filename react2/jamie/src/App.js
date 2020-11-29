import {useState} from 'react';
import './App.css';

function App() {

const [text, setText] = useState('');
const [paragraphs, setParagraphs] = useState([])

  function handleInput(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    console.log(e.target.children.input.value);
    let userInput = e.target.children.input.value;

    setParagraphs([...paragraphs, userInput]);

    e.target.children.input.value = ''
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='put your text here' name='input' onKeyUp={handleInput}></input>
      <input type="submit" value='Submit'/>
      </form>

      <p>{text}</p>
      <h3>{text}</h3>
      <h2>{text}</h2>
      {paragraphs.map((element, index)=>{
        return (<p key={index}>{element})</p>)
      })}
    </div>
  );
}

export default App;
