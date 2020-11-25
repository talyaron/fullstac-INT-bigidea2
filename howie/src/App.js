import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0)
  const [text, setText] = useState('')
  const [color, setColor] = useState()
  const [chat, setChat] = useState()
  
  
  function handleClicks(e){
   
    e.preventDefault();
    setClicks(clicks+1)

  }
  function handleInput(e){
    var input = e.target.value;
    e.preventDefault();
    setText(input)
  }
  function handleColor(e){
    e.preventDefault()
    var hex = e.target.value
    console.log(hex)
    setColor(hex)
    
  }

  function handleChat(e){
    e.preventDefault()
    var thisChat = e.target.value;
    setChat()
  }
  return (
    
    <div style={{backgroundColor : color}} className="App"> 
    <a> {text}</a>
    <h1>ive been clicked {clicks} times</h1>

      <button onClick = {handleClicks}>click me</button>
      <input type = 'text' placeholder = 'type!' onKeyUp = {handleInput}></input>
      <input type = 'color' onChange = {handleColor}></input>

      <form>
        <label>
        Chat:
        <input type="text"/>
        </label>
        <input type="submit" value="Submit" onSubmit = {handleChat} />
      </form>

      <div id = 'chat'>
      {chat}
      </div>
    </div>

  );


}

export default App;
