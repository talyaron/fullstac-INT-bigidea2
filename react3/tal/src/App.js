import { useState } from 'react'
import './App.css';

function App() {
  const [emotions, setemotions] = useState([])


  function handleAddEmoji(e) {
    e.preventDefault();

    setemotions([...emotions, {
      text: e.target.children.emoji.value,
      type: 'emoji'
    }])

    e.target.children.emoji.value = '';
  }

  function handleAddSentence(e) {

    e.preventDefault();

    setemotions([...emotions, {
      text: e.target.children.sentence.value,
      type: 'sentence'
    }])

    e.target.children.sentence.value = '';

  }


  return (
    <div className="App">
      <form onSubmit={handleAddEmoji}>
        <input type='text' name='emoji' placeholder='Add emoji' />
      </form>
      <form onSubmit={handleAddSentence}>
        <input type='text' name='sentence' placeholder='Add sentence' />
      </form>

      <h2>emotions</h2>
      {emotions.map((emoji, index) => {
        return (<img className='emoji' key={index} src={emoji.text} alt='emoji' />)
      })
      }
      <h2>sentences</h2>
      {emotions.map((emoji, index) => {
        return (<img className='sentence' key={index} src={emoji.text} alt='emoji' />)
      })
      }
    </div>
  );
}



export default App;
