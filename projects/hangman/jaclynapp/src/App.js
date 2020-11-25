import './App.css';
import { DB } from './Firebase/firebaseConfig';
import {useEffect, useState} from 'react';

function App() {
  const [gameId, setGameId] = useState('');
  const [isHidden, setIsHidden] = useState(false);


function handleNewGame() {
  let randomId=Math.floor(Math.random()*10000+1);
    setGameId(randomId);
  DB.collection('games').add({gameId:randomId})
    .then((game) => { console.log(game.id) })
    .catch(e => { console.error(e) })
    hide()
}
   
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getUserUID() {
    //get the uid
    let userUID = sessionStorage.getItem('userUID');
    if (userUID === null) {
        userUID = uid();
        //create a uid
        sessionStorage.setItem('userUID', userUID);
        console.log(userUID);
    }
    return userUID;
    hideTwo()
  }

  function hide() {
  document.getElementById('submit').style.display = 'none';
}

function hideTwo() {
  document.getElementById('submit2').style.display = 'none';
}

  return (
    <div className="App">
        <button id ="submit" onClick={handleNewGame} 
        > Generate Game Id and Submit</button>
        <p id="gameId>"> Game ID:{gameId} </p>
      <input type="text" id="input"></input>
      <input type="submit" id="submit2"></input>
      <p>Submit Game ID</p>
      <input type="text" id="user"></input>
      <input type="submit" id="username"></input>
      <p>Submit Username</p>
    </div>
  );
}

export default App;
