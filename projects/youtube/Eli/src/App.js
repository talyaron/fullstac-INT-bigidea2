import { useState } from 'react'
import './App.css';
import "./firebaseConfig"

function App() {
  
  const [emoji, setEmoji] = useState([])
  
  const [sentence, setSentence] = useState([])
  
  const [video, setVideo] = useState([])


  function handleAddEmoji(e) {
    e.preventDefault();

    setEmoji(e.target.children.emoji.value)

    e.target.children.emoji.value = '';
  }

  function handleAddSentence(e) {

    e.preventDefault();

    setSentence(e.target.children.sentence.value)
    console.log(sentence)

    e.target.children.sentence.value = '';

  }

  function handleAddVideo(e) {

    e.preventDefault();

    let newUrl = e.target.children.video.value.slice(17)

    setVideo(newUrl)

    e.target.children.video.value = '';

  }


  return (
    <div className="App">
      <form onSubmit={handleAddEmoji}>
        <input type='text' name='emoji' placeholder='Add emoji' />
        <input type="submit"/>
      </form>
      <form onSubmit={handleAddSentence}>
        <input type='text' name='sentence' placeholder='Add sentence' />
        <input type="submit"/>
      </form>
      <form onSubmit={handleAddVideo}>
        <input type='text' name='video' placeholder='Add video from YouTube' />
        <input type="submit"/>
      </form>

      <h2>Emojis</h2>
      <img className='emoji' src={emoji} alt={`Emoji: ${emoji}`} />
      
      <h2>Sentences</h2>
      <p>{sentence}</p>
      
      <h2>Videos</h2>
      <iframe title='some video' width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </div>
  );
}



export default App;
