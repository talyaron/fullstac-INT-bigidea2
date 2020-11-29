
import {DB} from './functions/firebase';
import {useEffect, useState} from 'react';
import './App.css';
import { realpathSync } from 'fs';



function App() {
  const[gameId, setGameId] = useState('');
  const [showCreateGame, setShowCreateGame] =useState(true);
  const [playersDOM, setPlayersDom] = useState([]);
  const [team 1, setTeam1] =useState ([]);
  const [team 2, setTeam2] =useState ([]);


  //useStates
  const [gameId, setGameId]=useState('');
  const [isHidden, setIsHidden]=useState(false);

  function createGame(){
    let id=createGameId();
    DB.collection('games').add({gameId:id})
    .then((game)=>{console.log(game.id)})
    .catch(e=>{console.error(e)})
    setIsHidden(true);
    //document.getElementById('createGame').style.display="none";
  }

  function createGameId(){
    let randomId=Math.floor(Math.random()*10000+1);
    setGameId(randomId);
    return randomId;
  }

  //create a unique id for the user, and store in the browser
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

//get game from the db and store user in players
DB.collection('games')
.where('gameID','==',gameID.toString())
.limit(1)
.get()
.then(gamesDB =>{
  if (gamesDB.size === 0) {
    alert('A game with this id does not exsist')
  } else
    //set user to the game on DB

    gamesDB.forEach(gameDB.data())
    let{players} = gameDB.data();
    
    //extract players
    let {players}= gameDB.data();
    console.log(players)

    //if players do not exsist in DB
    if (players === undefined){
      players = {};

    }

    //add the user to the players 
    players[userId] = {username};

    console.log(players)

    //store the players back to the Db
    DB.collection('games').doc(gameDB.id).update ({players})
    .then(() => {console.lod('stored player', userID,  )}

})


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

  function listenToPlayers(gameUniqueId){
    DB.collection('games').doc(gameUniqueId.onSnapshot(gameDB=>{
     
      const players= gameDB.data().players
      const team1= gameDB.data().team1 || [];
      const team2= gameDB.data().team2 || [];
      setTeam1(team1)
      setTeam2(team2)
      console.log(gameDB.data())
      const players = gameDB.data(.players)

      const playersArr;
      for(let i in players){
        playersArr.push(players[i].username,userId:i})
      }

      setPlayersDOM(playersArr)
    }))
  }

  function createTwoGroups(gameUniqueId, playersDom, setPlayersDom){
  function createTwoGroups(playersDom, setPlayersDom){

    let players =[...playersDom], group1 = [], group2 = [], counter = playersDom.length + 2;

    let turn = 0;

    let randomPlayer = Math.floor(Math.random()*players.length)
  
    while )players.length > 0){
    if(turn=== 0){
      group1.push(players[randomPlayer]);
      players.splice(randomPlayer,1)
      turn = 1;
  }else{
    group2.push(players[random]);
    players.splice(randomPlayer, 1)
    turn=0;
  }
  console.log(group1)
  console.log(group2)

//store it to DB
let gameUniqueId = sessionStorage.getItem('gameUniqueId')

DB.collection('games').doc(gameUniqueId).update({group1, group2})
.then(()=>{console.info('updated groups to DB')})
.catch(e=>{console.error(e)})

  }

  return (
    <div className="App">
      <button id="createGame" onClick={createGame} style={{display:`${isHidden?'none':'block'}`}}>Create a New Game</button>
      <p id="gameId">Game ID:{gameId} </p>
      <form id="gameSelect">
        <input type="text" placeholder="enter game id"></input>
        <input type="submit" value="Enter game"></input>
        <input type="text" placeholder="name"></input>
      </form>
      (playersSOM.map((player, index)=>{
        return(<p key={index}>{player.username}</p>)

      })
      <button onClick={()=>{createTwoGroups(playersDom)}}> Create groups </button> playersDom,setPlayersDom)}}
    </div>
  );
}

export default App;
