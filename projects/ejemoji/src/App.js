import './App.css';
import MainPage from "./pages/main"
import AddPage from "./pages/add"
import SelectPage from "./pages/select"
import ListPage from "./pages/list"
import SendPage from "./pages/send"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div id="bigBox">
        <div id="menu">
          <div className="menuBox">
              <Link to="/add">Add</Link>
            </div>
            <div className="menuBox">
              <Link to="/select">Select</Link>
            </div>
            <div className="menuBox">
              <Link to="/list">List</Link>
            </div>
            <div className="menuBox">
              <Link to="/send">Send</Link>
            </div> 
            <div className="menuBox">
              <Link to="/main">main</Link>
            </div> 
        </div>
            

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <div className="activeBox">
              <Add />
            </div>
          </Route>

          <Route path="/select">
            <div className="activeBox">
              <Select />
            </div>
          </Route>

          <Route path="/list">
            <div className="activeBox">
              <List />
            </div>
          </Route>

          <Route path="/send">
            <div className="activeBox">
              <Send />
            </div>
          </Route>

          <Route path="/main">
            <div className="activeBox">
              <Main />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Add() {
  return AddPage();
}

function Select() {
  return SelectPage();
}

function List() {
  return ListPage();
}

function Send() {
  return SendPage();
}

function Main() {
  return MainPage();
}
