import './App.css';
import { DB } from './Firebase/firebaseConfig';
import { useState } from 'react';

function App() {
  const [gameId, setGameId] = useState('');
  const [showCreateGame, setShowCreateGame] = useState(true);

  function handleNewGame() {
    let randomId = Math.floor(Math.random() * 10000 + 1);
    setGameId(randomId);
    DB.collection('games').add({ gameId: randomId.toString() })
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
    setShowCreateGame(false)
  }

  function joinGame(e) {
    e.preventDefault();

    let gameId = e.target.children.gameid.value;
    let username = e.target.children.username.value;
    console.log(gameId)

    let userId = createUid();
    sessionStorage.setItem('userId', userId)

    DB.collection('games')
    .where('gameId','==', gameId.toString())
    .limit(1)
    .get()
    .then(gamesDB=>{
      gamesDB.forEach(gameDB=>{
        console.log(gameDB.data())
        let {players} = gameDB.data();
        if(players === undefined){
          players = [userId]
        } 

        if(!players.includes(userId)){
          players.push(userId)
        }

        players[userId] = {username};

        console.log(players)
        DB.collection('games').doc(gameDB.id).update({players})
        .then(()=>{console.log('stored player', userId, 'in game number', gameDB.id)})
        .catch(e=>{
          console.error(e)
        })
      })
      
    })
    .catch(e=>{
      console.error(e)
    })

  }


  return (
    <div className="App">
      <button id="submit" onClick={handleNewGame} className={showCreateGame ? '' : 'hidden'}>
        Generate Game Id and Submit
      </button>
      <p id="gameId>"> Game ID:{gameId} </p>
      <form onSubmit={joinGame} >
        <input type='text' name='gameid' placeholder='Enter game number' />
        <button type='submit'>Join</button>
        <input type='text' name='username' placeholder='Enter username' />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;

function createUid() {
  return Math.random().toString(16).slice(2)
}

