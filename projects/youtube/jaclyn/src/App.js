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

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//returns the uid
function getUserUID() {
    //get the uid
    let userUID = sessionStorage.getItem('userUID');
    if (userUID === null) {
        userUID = uid();
        //create a uid
        sessionStorage.setItem('userUID', userUID);
    }
    return userUID;
}