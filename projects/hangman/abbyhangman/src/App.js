import './App.css';
import { DB } from './firebaseConfig';
import { useState, useEffect } from 'react'

function App() {
  const [gameId, setGameId] = useState('')
  const [isHidden, setIsHidden] = useState(false);
  const [playersDom, setPlayersDom] = useState([])
  //let [playersState, setPlayers] = useState('')

/*useEffect(()=> {
  //listen to the players 
  
}, [])*/

  let userUID

  function handleInput() {
    //creating a game ID 
    let generatedId = Math.floor(Math.random() * 9000) + 1000;
    console.log(generatedId);
    setGameId(generatedId);
    //adding the collection and game ID to the database 
    DB.collection('games').add({ gameId: generatedId.toString() })
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
    //hiding the new game button 
    //document.getElementById('newGame').style.display = "none";
    setIsHidden(true)
  }

  let counter = 0
  let teamNumber 
  //going to the database 
  function gameUpdate(e) {
    e.preventDefault();
    try {

      //get user name and game id from the user
      let gameId = document.getElementById('gameId').value;
      let username = document.getElementById('name').value;

      //create user id, and store it on the sessionStorage

      let userId = getUserUID();

      console.log('before getting the things from db')
      //get game from the db, and store user in players
      DB.collection('games')
        .where('gameId', '==', gameId.toString())
        .limit(1)
        .get()
        .then(gamesDB => {
          if (gamesDB.size === 0) {
            alert("A game with this id dosn't exists")
          } else {
            //set user to game on DB
            if (counter % 2 == 0) {
              teamNumber = 1;
            } else {
              teamNumber = 2;
            }
            gamesDB.forEach(gameDB => {
              console.log(gameDB.data())
              //extract players
              let { players } = gameDB.data();

              console.log(players)
              //if players do not exist in DB
              if (players === undefined) {
                players = {};
              }
              //add the user to the players
              players[userId] = { username, teamNumber };

              counter++

              console.log(players)

              listenToPlayers(gameDB.id, setPlayersDom)

              //store the players back to DB
              DB.collection('games').doc(gameDB.id).update({ players })
                .then(() => { console.log('stored player', userId, 'in game number', gameDB.id) })
                .catch(e => {
                  console.error(e)
                })
            })
          }
        })
        .catch(e => {
          console.error(e)
        })
    } catch (e) {
      console.error(e)
    }
    //getPlayers();
  }
  /*function getPlayers() {
    DB.collection('games').onSnapshot(gamesDB => {
      gamesDB.forEach(gameDB => {
        let player = gameDB.data().players
        console.log(player)
        let playerArray = []
        playerArray.push(player)
        setPlayers(playerArray);

        // let playerDiv = document.getElementById('playersWrapper')
        // playerDiv.innerHTML += `<p>${player}</p>`
      })
    })
  }*/

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

  function listenToPlayers(gameUniqueId, setPlayersDom) {
    DB.collection('games').doc(gameUniqueId).onSnapshot(gameDB => {
      console.log(gameDB.data())
      const players = gameDB.data().players
      console.log(players)
      let playersArray = []
      for(let i in players) {
        playersArray.push(players[i])
      }
      setPlayersDom(playersArray)
    })
  }

  return (
    <div className="App">
      <input type='submit' id='newGame' value='New Game' onClick={handleInput} style={{ display: `${isHidden ? 'none' : 'block'}` }} />
      <p id='randomNumber'>Game ID: {gameId}</p>
      <input type='text' id='gameId' placeholder='Enter Game ID' />
      <input type='text' id='name' placeholder='Enter Your Name' />
      <input type='submit' value='Submit' onClick={gameUpdate} />
      <div id="playersWrapper">Players: </div>
      {playersDom.map((player, index)=> {
        return(<p key={index}>{player.username}</p>)
      })}
    </div>
  );
}
export default App;
