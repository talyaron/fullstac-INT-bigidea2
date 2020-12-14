import './App.css';
import React from 'react';
import {DB} from './functions/firebaseConfig';
import Main from "./pages/Main/Main"
import AddPage from "./pages/add/add"
import SelectPage from "./pages/select/select"
import ListPage from "./pages/list/list"
import SendPage from "./pages/send/send"

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
          <div className="navigation">
            <div className="add">
              <Link to="/add">Add</Link>
            </div>
            <div>
              <Link to="/select">Select</Link>
            </div>
            <div>
              <Link to="/list">List</Link>
            </div>
            <div>
              <Link to="/send">Send</Link>
            </div>
          </div>
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
          <Route path="/">
            <Main/>
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

