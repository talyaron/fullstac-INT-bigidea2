import './App.css';
import { DB } from './firebaseConfig';
import { useState } from 'react'

function App() {
  const [gameId, setGameId] = useState('')
  const [isHidden, setIsHidden] = useState(false);
  const [playersDom, setPlayersDom] = useState([]);
  const [team1, setTeamOne] = useState([]);
  const [team2, setTeamTwo] = useState([]);

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
    setIsHidden(true)
  }

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
              players[userId] = { username };

              console.log(players)

              listenToGame(gameDB.id, setPlayersDom, setTeamOne, setTeamTwo)
              //setPlayersDom because you are passing listenToGame this function, because this is under gameDB, it is for each game --> 
              //for each game there is a new value for playersDom --> want to use setPlayersDom because it is being updated
              //instead of the parameter being a variable, you can pass it a function --> use the function in a function
              //under listenToGame you write "setPlayersDom(playersArray)" --> you can update playersDom there 
              //gameDB.id is getting the id of the game from the database, which is defined above --> number is passed to the function 
              // the reason need these parameters is because the value is different each game
              //reason you need the functions is because the values are changing
              //basically just passing the function the functions so that it can update the variables


              sessionStorage.setItem("gameUniqueId", gameDB.id)

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

  function listenToGame(gameUniqueId, setPlayersDom, setTeamOne, setTeamTwo) {
    DB.collection('games').doc(gameUniqueId).onSnapshot(gameDB => {
  
      const players = gameDB.data().players
      const team1 = gameDB.data().team1 || [];
      const team2 = gameDB.data().team2 || [];
      setTeamOne(team1)
      setTeamTwo(team2)

      console.log(players)
      let playersArray = []
      for (let i in players) {
        playersArray.push({ username: players[i].username, userId: i })
      }
      setPlayersDom(playersArray)
    })
  }

  function createTwoGroups(playersDom) {

    let players = [...playersDom], team1 = [], team2 = [], counter = playersDom.length + 2;
  
    let turn = 0;
  
    
  
    while (players.length > 0 && counter>0) {
  
      let randomPlayer = Math.floor(Math.random() * players.length);
  
      
      counter--
  
      console.log(players.length, counter)
      if (turn === 0) {
        team1.push(players[randomPlayer]);
        players.splice(randomPlayer, 1)
        turn = 1;
  
      } else {
        team2.push(players[randomPlayer]);
        players.splice(randomPlayer, 1)
        turn = 0;
      }
    }
    console.log(team1)
    console.log(team2)
  
    //store it to DB
    let gameUniqueId = sessionStorage.getItem('gameUniqueId')
  
    DB.collection('games').doc(gameUniqueId).update({team1, team2})
    .then(()=>{console.info('updated groups to DB')})
    .catch(e=>{console.error(e)})
  }
  return (
    <div className="App">
      <input type='submit' id='newGame' value='New Game' onClick={handleInput} style={{ display: `${isHidden ? 'none' : 'block'}` }} />
      <p id='randomNumber'>Game ID: {gameId}</p>
      <input type='text' id='gameId' placeholder='Enter Game ID' />
      <input type='text' id='name' placeholder='Enter Your Name' />
      <input type='submit' value='Submit' onClick={gameUpdate} />
      <div id="playersWrapper">Players: </div>
      {playersDom.map((player, index) => {
        return (<p key={index}>{player.username}</p>)
      })}
      <button onClick={() => { createTwoGroups(playersDom) }}>Create groups</button>
      <div className='teamsWrapper'>
        <div className='team'>
          <h2>Team 1</h2>
          {team1.map((member,index)=>{
            return(<p key={index}>{member.username}</p>)
          })}
        </div>
        <div className='team'>
          <h2>Team 2</h2>
          {team2.map((member,index)=>{
            return(<p key={index}>{member.username}</p>)
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
