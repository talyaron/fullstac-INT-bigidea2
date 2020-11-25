import './App.css';
import { DB } from './firebaseConfig';
import { useState } from 'react'

function App() {
  const [gameId, setGameId] = useState('')
  const [isHidden, setIsHidden] = useState(false);
  function handleInput() {
    //creating a game ID 
    let generatedId = Math.floor(Math.random() * 9000) + 1000;
    console.log(generatedId);
    setGameId(generatedId);
    //adding the collection and game ID to the database 
    DB.collection('games').add({gameId: generatedId})
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
    //hiding the new game button 
    //document.getElementById('newGame').style.display = "none";
    handleHideMe()
  }

  function handleHideMe() {
    setIsHidden(true)
  }

  return (
    <div className="App">
      <input type='submit' id='newGame' value='New Game' onClick={handleInput} style={{display: `${isHidden?'none':'block'}`}}/>
      <p id='randomNumber'>Game ID: {gameId}</p>
    </div>
  );
}
export default App;
