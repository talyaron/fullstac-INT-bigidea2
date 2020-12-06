import './App.css';
import {DB} from './functions/firebaseConfig';
import {useEffect, useState} from 'react';

function App() {

  //useStates
  const [gameId, setGameId]=useState('');
  const [isHidden, setIsHidden]=useState(false);
  const [playersDom, setPlayersDom] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  function createGame(){
    let id=createGameId();
    DB.collection('games').add({gameId:id.toString(), players:{}})
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

  function storeGameInfo(e){
    e.preventDefault();
    let username=document.getElementById('username').value;
    let enteredGame=document.getElementById('enteredId').value;
    let userID=getUserUID();
    //console.log(username);
    console.log('before getting the db')
    
    DB.collection('games')
    //.where('gameId', '==', gameId.toString())
    .where('gameId','==',enteredGame.toString())//test
    .limit(1)
    .get()
    .then(gamesDB=>{
      if(gamesDB.size===0){
        alert("A game with this id doesn't exist");
      }
      else{
        //set user to game on DB
        gamesDB.forEach(gameDB=>{
          console.log(gameDB.data())
          let {players}=gameDB.data();
          console.log(players)
          if(players===undefined){
            players={};
          }
          players[userID]={username};
          
          console.log(players);
    
          listenToGame(gameDB.id, setPlayersDom, setTeam1, setTeam2);
          sessionStorage.setItem('gameUniqueId', gameDB.id)

          DB.collection('games').doc(gameDB.id).update({players})
          .then(()=>{console.log('stored player', userID, 'in game number', gameDB.id)})
          .catch(e=>{
            console.error(e)
          })
        }) 
      }
    })
  }
  
  //new from tal
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

    let players = [...playersDom], group1 = [], group2 = [], counter = playersDom.length + 2;
  
    let turn = 0;
  
    while (players.length > 0 && counter>0) {
  
      let randomPlayer = Math.floor(Math.random() * players.length);
  
      
      counter--
  
      console.log(players.length, counter)
      if (turn === 0) {
        group1.push(players[randomPlayer]);
        players.splice(randomPlayer, 1)
        turn = 1;
  
      } else {
        group2.push(players[randomPlayer]);
        players.splice(randomPlayer, 1)
        turn = 0;
      }
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
      <form id="gameSelect" onSubmit={storeGameInfo}>
        <input type="text" placeholder="enter game id" id="enteredId"></input>
        <input type="text" id="username" placeholder="enter username"/>
        <input type="submit" value="Enter game"></input>
      </form>
      {playersDom.map((player,index)=>{
        return(<p key={index}>{player.username}</p>)
      })}
      <button onClick={()=>{createTwoGroups(playersDom)}}>Create groups</button>
      <div className='teamWrapper'>
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
