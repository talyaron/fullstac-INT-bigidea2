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

  function handleColor(e){
    const color=e.target.value;
    setColor(color);
  }

    console.log(e.target.children.input.value);
    let userInput = e.target.children.input.value;

    setParagraphs([...paragraphs, userInput]);

    e.target.children.input.value = ''
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="color" placeholder='put your text here' name='input' onKeyUp={handleInput}></input>
      <input type="submit" value='Submit'/>
      </form>

      <div>style.background:color</div>

      <p>{text}</p>
      <h3>{text}</h3>
      <h2>{text}</h2>
      <input type= 'color' onChange={handleColor}/>
      {paragraphs.map((element, index)=>{
        return (<p key={index}>{element})</p>)
      })}
    </div>
  );
}

export default App;
