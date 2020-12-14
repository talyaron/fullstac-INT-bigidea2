import './Main.css';
import {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Main(){

    //gets the UID
    const uid = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      }
      function getUserUID() {
          //get the uid
          let userUID = localStorage.getItem('userUID');
          if (userUID === null) {
              userUID = uid();
              //create a uid
              localStorage.setItem('userUID', userUID);
          }
          return userUID;
      }   

      function joinApp(){
        let id=getUserUID();
        window.location.href=''
      }

    return(
        <div className="Main">
            <div className="homeContent">
                <h1>EmoshApp</h1>
                <button onClick={joinApp}>
                    <Link to="/add">Join</Link></button>
            </div>
        </div>
    );
}
export default Main;