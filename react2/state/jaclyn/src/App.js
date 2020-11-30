import './App.css';
import {useState} from 'react';
 
function App() {
  const [text, setText] = useState('');
  const [paragraphs, setParagraphs] = useState([]);
  const [colors, setColors] = useState([]);

  function handleInput(e){
  setText(e.target.value)
  }

  function handleColors(e){
    setColors(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.children.input.value)
    let userInput = e.target.children.input.value;
    setParagraphs([...paragraphs,userInput])

  }

  return (
    <div className="App">
      <h2 style={{backgroundColor:colors}}></h2>
      <form onSubmit={handleSubmit}>
     <input type='color' placeholder='put in your text' name='input' onKeyUp={handleInput}/>
     <input type='submit' value='submit'/>
     </form>
     <p>{text}</p>
     {paragraphs.map((paragraph, index) => {
       return (<p key={index}>{paragraph}</p>)
     })}
    </div>
  );
}

export default App;
