import { useState } from 'react'
import './App.css';

const moods = [1,2,3,4,5]

function App() {
  const [emotions, setemotions] = useState([]);
  const [moodNumber, setMoodNumber] = useState(1)


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

  function handleMood(mood){
    console.log(mood)
    setMoodNumber(mood)
  }


  return (
    <div className="App">
     
      {moods.map((mood, index)=>{
        return (<button key={index} onClick={()=>{handleMood(mood)}} 
        className={moodNumber===mood?'mood mood-selected':'mood'}>
          {mood}
          </button>)
      })}
     
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
