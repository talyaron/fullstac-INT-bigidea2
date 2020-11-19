import './App.css';
//import {useState} from 'react';

let name;
let colour;
let login = false;

function App() {
  return (
    <div className="App">
      <form onSubmit={getName} id="form">
        <input type="text" placeholder="Enter Name" id="name"/>
        <input type="color" id="colour"/> 
        <span>Select a colour</span>
        <input type="submit"/>
      </form>
      

      <div id="chatBox">

      </div>
    </div>
  );
}

function getName(e){
  e.preventDefault()
  if (login === false){
    name = document.getElementById("name").value
    colour = document.getElementById("colour").value

    document.getElementById("form").innerHTML = `
    <p>Name: ${name}, colour: ${colour}<p>
    <input type="text" id="message" placeholder="Enter a message"/>
    <input type="submit" value="Send"/>
    `
    login = true
  }else{
    sendChat()
  }  
}

function sendChat(){
  let message = document.getElementById("message").value

  document.getElementById("chatBox").innerHTML += `
  <div className="chat" style="border:5px solid ${colour}">${name}: ${message}</div>
  `

}


export default App;
