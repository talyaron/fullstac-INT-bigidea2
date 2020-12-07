import './App.css';
import AddDoc from './Components/Add/AddDoc'
//import ListDoc from './Components/List/ListDoc'
//import SelectDoc from './Components/Select/SelectDoc'
//import SendDoc from './Components/Send/SendDoc'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";


function App() {
  let mainScreen = document.getElementById("mainScreen")
  //mainScreen.style.display = "none"

  //joining the game and clearing the screen 
  function handleJoin(e) {
    e.preventDefault();
    let userId = getUserUID();
    console.log("userId: " + userId)

    let button = document.getElementById('joinBtn')
    button.remove()
    let header = document.getElementById("appName")
    header.remove()
    mainScreen = document.getElementById("mainScreen")
    mainScreen.style.display = "block"
  }

  //making userID and putting it in local storage 
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  function getUserUID() {
    let userUID = localStorage.getItem('userUID');
    console.log("userUID: " + userUID);
    if (userUID === null) {
      userUID = uid();
      //create a uid
      localStorage.setItem('userUID', userUID);
    }
    return userUID;
  }




  return (
     <div id="app">
       <h1 id="appName">EmoshApp</h1>
       <input type="submit" value="join" onClick={handleJoin} id="joinBtn"/>
      


    <div id="mainScreen" style={{display:"none"}}><Router>
      <div>
        <nav>
          <div><Link to="/AddDoc">Add</Link></div>
          <div><Link to="/SelectDoc">Select</Link></div>
          <div><Link to="/ListDoc">List</Link></div>
          <div><Link to="/SendDoc">Send</Link></div>
       
        </nav>

  <Switch>
    <Route path="/AddDoc">
      <h2>Add</h2>
      <AddDoc/>
    </Route>
    <Route path="/SelectDoc">
    <h2>Select</h2>
    </Route>
    <Route path="/ListDoc">
    <h2>List</h2>
    </Route>
    <Route path="/SendDoc">
    <h2>Send</h2>
    </Route>
  </Switch>
      </div >
    </Router >

       </div>
       </div>
  );
}

export default App;
