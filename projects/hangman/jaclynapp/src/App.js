import './App.css';
import { DB } from './Firebase/firebaseConfig';
import {useEffect, useState} from 'react';

function App() {
  const [gameId, setGameId] = useState('');

  function handleNewGame() {
    let randomId=Math.floor(Math.random()*10000+1);
      setGameId(randomId);
    DB.collection('games').add({gameId:randomId})
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
      hide()
  }


  function hide() {
  document.getElementById('submit').style.display = 'none';
}

  return (
    <div className="App">
        <button id ="submit" onClick={handleNewGame} 
        > Generate Game Id and Submit</button>
        <p id="gameId>"> Game ID:{gameId} </p>
    </div>
  );
}

export default App;
