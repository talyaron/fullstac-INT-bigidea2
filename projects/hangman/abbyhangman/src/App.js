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
    handleName()
  }

  function handleHideMe() {
    setIsHidden(true)
  }

  function handleName() {
    let name = document.getElementById('name').value
    let UID = getUserUID()
    console.log(name, UID) 
    sessionStorage.setItem('playerID', UID);
    DB.collection('games').add({player: name, userID: UID})
      .catch(e => { console.error(e) })
  }

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


  return (
    <div className="App">
      <input type='submit' id='newGame' value='New Game' onClick={handleInput} style={{display: `${isHidden?'none':'block'}`}}/>
      <p id='randomNumber'>Game ID: {gameId}</p>
      <input type='text' id='name' placeholder='Enter Your Name'/>
      <input type='submit' value='Submit Name' onClick={handleName}/>
    </div>
  );
}
export default App;
