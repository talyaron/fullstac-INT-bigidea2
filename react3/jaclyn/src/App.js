import {useState} from 'react';
import './App.css';

function App() {
  const [emojis, setEmojis] = useState([])

  function handleAddEmoji(e){
    e.preventDefault();
  
    setEmojis([...emojis, {
    text: e.target.children.emoji.value,
    type: 'emoji'}])

  e.target.children.emoji.value = '';
}
function handleAddSentence(e){
  e.preventDefault();
  setEmojis([...emojis, {
    text: e.target.children.sentence.value,
    type: 'emoji'
  }])
}
  return (
    <div className="App">
      <form onSubmit={handleAddEmoji}>
        <input type='text' name='emoji' placeholder = 'Add emoji'/>
      </form>
      <form onSubmit={handleAddSentence}>
      <input type='text' name='sentence' placeholder = 'Add sentence'/>
      </form>
      <h2> emojies</h2>
      {emojis.map((emoji,index)=>{
        return (<img className='emoji' key={index} src={emoji.text} alt='emoji' />)
      }
      )}
    </div>
  );
}


export default App;
