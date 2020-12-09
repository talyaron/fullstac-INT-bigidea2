import './App.css';
import MainPage from "./pages/main"
import SelectPage from "./pages/select"
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
              <Link to="/">home</Link>
            </div>
            <div className="menuBox">
              <Link to="/select">Select</Link>
            </div>
            <div className="menuBox">
              <Link to="/send">Send</Link>
            </div> 
        </div>
                   

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/select">
            <div className="activeBox">
              <Select />
            </div>
          </Route>
          
          <Route path="/send">
            <div className="activeBox">
              <Send />
            </div>
          </Route>

          <Route path="/">
            <div className="activeBox">
              <Main />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Select() {
  return SelectPage();
}

function Send() {
  return SendPage();
}

function Main() {
  return MainPage();
}

