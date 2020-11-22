import './App.css';

function App() {
  function handleInput(e) {
      let message = document.getElementById('textBox').value
      let name = document.getElementById('nameBox').value
      console.log(name, message);
      document.getElementById("messages").innerHTML += `<div className="message"><p>${name}: ${message}</p></div>`
      document.getElementById('nameBox').value = ""
      document.getElementById('textBox').value = ""
  }

  return (
    <div className="App">
      <input type='text' placeholder='enter name' id="nameBox" className="App-header"/>
      <input type='text' placeholder='enter text' id="textBox" className="App-header"/>
      <input type='submit' onClick={handleInput} id='submitButton' className="App-header"/>
      <div id="messages">
        
      </div>
    </div>
  );
}

export default App;

