import './App.css';
import Add from './Components/Add/Add'
import List from './Components/List/List'
import Select from './Components/Select/Select'
import Send from './Components/Send/Send'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";


function App() {
  const mainScreen = document.getElementById("mainScreen")
  //mainScreen.style.display = "none"

  //joining the game and clearing the screen 
  function handleJoin(e) {
    e.preventDefault();
    let userId = getUserUID();

    let button = document.getElementById('joinBtn')
    button.remove()
    let header = document.getElementById("appName")
    header.remove()
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
          <div><Link to="/Add">Add</Link></div>
          <div><Link to="/Select">Select</Link></div>
          <div><Link to="/List">List</Link></div>
          <div><Link to="/Send">Send</Link></div>
       
        </nav>

  <Switch>
    <Route path="/Add">
      <Add />
    </Route>
    <Route path="/Select">
      <Select />
    </Route>
    <Route path="/List">
      <List />
    </Route>
    <Route path="/Send">
      <Send />
    </Route>
  </Switch>
      </div >
    </Router >

       </div>
       </div>
  );
}
function Add() {
  const {id} = useParams();
  return <h2>Add</h2>;
}
function Select() {
  const {id} = useParams();
  return <h2>Select</h2>;
}
function List() {
  const {id} = useParams();
  return <h2>List</h2>;
}
function Send() {
  const {id} = useParams();
  return <h2>Send</h2>;
}
export default App;
