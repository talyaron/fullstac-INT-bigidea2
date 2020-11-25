import './App.css';
import { DB } from './firebaseConfig';
import { useState } from 'react'

function App() {

  const [gameId, setGameId] = useState('')
  const [isHidden, setIsHidden] = useState(false);

  let enteredGameId
  let name
  let userUID

  function handleInput() {
    //creating a game ID 
    let generatedId = Math.floor(Math.random() * 9000) + 1000;
    console.log(generatedId);
    setGameId(generatedId);
    //adding the collection and game ID to the database 
    DB.collection('games').add({ gameId: generatedId })
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
    //hiding the new game button 
    //document.getElementById('newGame').style.display = "none";
    handleHideMe()
  }

  function handleHideMe() {
    setIsHidden(true)
  }

  function handleGameInfo() {
    gameUpdate()
    enteredGameId = document.getElementById('gameId').value
    getUserUID();
    getName();
    DB.collection('games').add({ enteredGameId: enteredGameId, userUID: userUID, name: name })
      .catch(e => { console.error(e) })
  }

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  function getUserUID() {
    //get the uid
    userUID = sessionStorage.getItem('userUID');
    console.log("userUID: " + userUID);
    if (userUID === null) {
      userUID = uid();
      //create a uid
      sessionStorage.setItem('userUID', userUID);
    }
    return userUID;
  }

  function getName() {
    name = document.getElementById('name').value;
    console.log(name);
  }
  //going to the database 
  function gameUpdate() {
    DB.collection('games')
      .where('gameId', '==', gameId.toString())
      .limit(1)
      .get()
      .then(gamesDB => {

        if (gamesDB.size === 0) {
          alert("A game with this id doesn't exist")
        } else {
          gamesDB.forEach(gameDB => {
            console.log(gameDB.data())

            let { players } = gameDB.data();
            console.log(players)

            if (players === undefined) {
              players = {};
            }
            players[userUID] = { name };
            console.log(players);
            DB.collection('games').doc(gameDB.id).update({ players })
              .then(() => { console.log('stored player', userUID, 'in game number', gameDB.id) })
              .catch(e => {
                console.error(e)
              })
            })
          }
        })
        .catch(e => {
          console.error(e)
        })

        } 

  return (
    <div className="App">
      <input type='submit' id='newGame' value='New Game' onClick={handleInput} style={{ display: `${isHidden ? 'none' : 'block'}` }} />
      <p id='randomNumber'>Game ID: {gameId}</p>
      <input type='text' id='gameId' placeholder='Enter Game ID' />
      <input type='text' id='name' placeholder='Enter Your Name' />
      <input type='submit' value='Submit' onClick={handleGameInfo} />
    </div>
  );
}
export default App;
