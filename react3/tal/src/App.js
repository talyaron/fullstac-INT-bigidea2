import { useState } from 'react'
import './App.css';

function App() {
  const [emojies, setEmojies] = useState([])


  function handleAddEmoji(e) {
    e.preventDefault();
    console.log(e.target.children.emoji.value)
    setEmojies([...emojies, {
      text: e.target.children.emoji.value,
      type: 'emoji'
    }])

    e.target.children.emoji.value = '';
  }


  return (
    <div className="App">
      <form onSubmit={handleAddEmoji}>
        <input type='text' name='emoji' placeholder='Add emoji' />
      </form>

      <h2>Emojies</h2>
      {emojies.map((emoji, index) => {
        return (<img className='emoji' key={index} src={emoji.text} alt='emoji' />)
      })
      }
    </div>
  );
}



export default App;
