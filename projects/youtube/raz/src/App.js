import './App.css';
import { useState } from 'react'

function App() {

  const [vidoeUrl, setVideoUrl] = useState('HEQcQm21DlY')

  function handleUrl(e) {
    e.preventDefault();

    let url = e.target.children.url.value;
    setVideoUrl(url)

  }

  return (
    <div className="App">
      <form onSubmit={handleUrl}>
        <input type='text' name='url'/>
        
      </form>
      <header className="App-header">
        <iframe title='some video' width="560" height="315" src={`https://www.youtube.com/embed/${vidoeUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </header>
    </div>
  );
}

export default App;
