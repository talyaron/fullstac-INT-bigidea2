import './App.css';
import {DB} from './functions/firebaseConfig';
import {useEffect, useState} from 'react';

function App() {

  //useStates
  const [gameId, setGameId]=useState('');
  const [isHidden, setIsHidden]=useState(false);

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
    let userID=getUserUID();
    //console.log(username);
    console.log('before getting the db')
    //get game number from DB and store user in players
    DB.collection('games')
    .where('gameId', '==', gameId.toString())
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
          DB.collection('games').doc(gameDB.id).update({players})
          .then(()=>{console.log('stored player', userID, 'in game number', gameDB.id)})
          .catch(e=>{
            console.error(e)
          })
        }) 
      }
    })
  }




  return (
    <div className="App">
      <button id="createGame" onClick={createGame} style={{display:`${isHidden?'none':'block'}`}}>Create a New Game</button>
      <p id="gameId">Game ID:{gameId} </p>
      <form id="gameSelect" onSubmit={storeGameInfo}>
        <input type="text" placeholder="enter game id"></input>
        <input type="text" id="username"/>
        <input type="submit" value="Enter game"></input>
      </form>
    </div>
  );
}

export default App;
