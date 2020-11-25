import logo from './logo.svg';
import './App.css';
import {DB} from './functions/firebaseConfig';
import {useState} from "react";

function App() {


  const [isHide, setIsHide] = useState(false);

  function handleHideMe(){
    setIsHide(true)
  }
  return (
    <div className="App">
      <button onClick={handleHideMe} style={{display:`${isHide?'none':'block'}`}}>Hide me</button>
    </div>
  );
}

export default App;
