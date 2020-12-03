import './App.css';
import Main from './Components/Main/Main'
import Suggestions from './Components/Pages/suggestions/Suggestions'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div><Link to="/">Main</Link></div>

          <div><Link to="/my-thoughts-about-you">My thougths about you</Link></div>

          <div><Link to="/suggestions">Users</Link></div>
       
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/suggestions">
      <Suggestions />
    </Route>
    <Route path="/">
      <Main />
    </Route>
  </Switch>
      </div >
    </Router >
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  const {id} = useParams();
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
