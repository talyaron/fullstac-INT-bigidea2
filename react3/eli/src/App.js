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

  function handleAddVideo(e) {

    e.preventDefault();

    let newUrl = e.target.children.video.value.slice(17)

    setemotions([...emotions, {
      text: newUrl,
      type: 'video'
    }])

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
      {emotions.filter(element=>element.type === "emoji").map((emoji, index) => {
        return (<img className='emoji' key={index} src={emoji.text} alt={`Emoji: ${emoji.text}`} />)
      })
      }
      <h2>Sentences</h2>
      {emotions.filter(element=>element.type === "sentence").map((sentence, index) => {
        return (<span className='sentence' key={index}>{sentence.text}</span>)
      })
      }
      <h2>Videos</h2>
      {emotions.filter(element=>element.type === "video").map((video, index) => {
        return (<iframe title='some video' width="560" height="315" src={`https://www.youtube.com/embed/${video.text}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>)
      })
      }
    </div>
  );
}



export default App;
