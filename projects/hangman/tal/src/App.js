import './App.css';
import { DB } from './functions/firebaseConfig';
import { useState } from 'react';

function App() {
  const [gameId, setGameId] = useState('');
  const [showCreateGame, setShowCreateGame] = useState(true);
  const [playersDom, setPlayersDom] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);





  function handleNewGame() {
    let randomId = Math.floor(Math.random() * 10000 + 1);
    setGameId(randomId);
    DB.collection('games').add({ gameId: randomId.toString() })
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
    setShowCreateGame(false)
  }

  function joinGame(e) {
    try {
      e.preventDefault();

      //get user name and game id from the user
      let gameId = e.target.children.gameid.value;
      let username = e.target.children.username.value;

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



              console.log(players);

              listenToGame(gameDB.id, setPlayersDom, setTeam1, setTeam2);
              
              sessionStorage.setItem('gameUniqueId', gameDB.id)

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


  return (
    <div className="App">
      <button id="submit" onClick={handleNewGame} className={showCreateGame ? '' : 'hidden'}>
        Generate Game Id and Submit
      </button>
      <p id="gameId>"> Game ID:{gameId} </p>
      <form onSubmit={joinGame} >
        <input type='text' name='gameid' placeholder='Enter game number' />
        <input type='text' name='username' placeholder='Enter your name' />
        <button type='submit'>Join</button>
      </form>
      {playersDom.map((player, index) => {
        return (<p key={index}>{player.username}</p>)
      })}
      <button onClick={() => { createTwoGroups( playersDom) }}>Create groups</button>
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

// function createUid() {
//   return Math.random().toString(16).slice(2)
// }

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


function listenToGame(gameUniqueId, setPlayersDom, setTeam1, setTeam2) {
  DB.collection('games').doc(gameUniqueId).onSnapshot(gameDB => {

    const players = gameDB.data().players
    const team1 = gameDB.data().team1 || [];
    const team2 = gameDB.data().team2 || [];
    setTeam1(team1)
    setTeam2(team2)




    const playersArr = [];
    for (let i in players) {
      playersArr.push({username:players[i].username, userId:i})
    }

    setPlayersDom(playersArr)

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