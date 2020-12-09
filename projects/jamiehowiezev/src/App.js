import './App.css';
import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";

//import Main from './Main';
//import Suggestions from './view/pages/Suggestions/Suggestions';
import { DB } from './functions/firebaseConfig';

export default function App() {
  return (
    <Router>
      <div>
        <nav>

          <div>
            <Link to="/">Main bla bla</Link>
          </div>
          <div>
            <Link to="/my-thoughts-about-you/">My Thoughts about You</Link>
          </div>
          <div>
            <Link to="/suggestions/">Sugesstions</Link>
          </div>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/my-thoughts-about-you/:id">
            <About />
          </Route>
          <Route path="/suggestions/:id">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  const { id } = useParams();
  return <h2>About: {id}</h2>;
}

function addToDB(){
  DB.collection('emotions').add({

  }).then(doc=>{
    //move to page -> /send/doc.id

  })
}

