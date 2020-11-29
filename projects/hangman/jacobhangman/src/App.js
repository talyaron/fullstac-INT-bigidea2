import './App.css';
import { DB } from './firebase/firebaseConfig'
import { useState } from 'react'

function App() {
  const [gameId, setGameId] = useState()
  const [isHide, setIsHide] = useState(false)

  function createGameID() {
    let randomId = Math.floor(Math.random() * 10000 + 1)
    setGameId(randomId)
    DB.collection('games').add({ gameId: randomId })
      .then((game) => { console.log(game.id) })
      .catch(e => { console.error(e) })
    setIsHide(true)
  }

  return (
    <div className='App'>
      <input type='submit' onClick={createGameID} style={{ display: `${isHide ? 'none' : 'block'}` }} id='createGameId' value='Create Game ID' />
      <p id='gameId'>Game ID: {gameId}</p>
    </div>
  )
}



export default App;
