import './App.css';
import Main from"./pages/main"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/select">Select</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/send">Send</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/select">
            <Select />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/send">
            <Send />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Add() {
  return <h2>Home</h2>;
}

function Select() {
  return <h2>About</h2>;
}

function List() {
  return <h2>Users</h2>;
}

function Send() {
  return <h2>Userds</h2>;
}
