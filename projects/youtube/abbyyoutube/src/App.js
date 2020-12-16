import './App.css';
//import { DB } from './Firebase';
//import { useState, useEffect } from 'react';
import Code from './Code'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
       <Router>
      <div>
        <Switch>
          <Route path="/:userId">
            <Code />
          </Route>
          <Route path="/">
            <Code />
          </Route>
        </Switch>
      </div>
    </Router>
    </div >
  );
}

export default App;

