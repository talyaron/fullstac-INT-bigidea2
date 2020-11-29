import logo from './logo.svg';
import './App.css';
import { DB } from './functions/firebaseConfig';
import { useState, useEffect } from 'react';
let number;


function App() {
  const [gameId, setGameId] = useState('');
  const [isHide, setIsHide] = useState(false);
  return (



    <div className="App">
      <header className="App-header">
        <button onClick={addDoc} style={{ display: `${isHide ? 'none' : 'block'}` }}>New Game</button>
        <p>GameID: {gameId}</p>
        <form id='form' onSubmit={getGameId} style={{ display: `${isHide ? 'none' : 'block'}` }}>
          <input type='number' placeholder='GameID: ' name='gameidInput' />
          <input type='text' placeholder='username: ' name='username' />
          <input type='submit' />
        </form>
      </header>
    </div>



  );
  
  
  
  function hide() {
    setIsHide(true)
  }
  function getGameId(e) {
    e.preventDefault();
    let username = e.target.children.username.value;
    let gameId = e.target.children.gameidInput.value;
    console.log(username)
    let UID = Math.random().toString(36).substr(2, 9);
    console.log(UID)
    sessionStorage.setItem('UID',UID)
    DB.collection('games').doc(gameId).get().then(e=>{
      let players= e.data().players;
      
      players[UID] = {username}
      DB.collection('games').doc(gameId).update({players:players})
      console.log(e.data())

    })
    hide()

  }
  function addDoc() {

    number = Math.floor(Math.random() * 9000) + 1000;
    number = number.toString()
    setGameId(number);

    DB.collection('games').doc(number).set({ gameId: number,players:{}})
      .then((game) => {
        console.log(game.id)
        
      })
      .catch(e => { console.error(e) });


  }

}

export default App;



