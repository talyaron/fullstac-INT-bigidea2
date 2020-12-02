import {useState} from 'react';
import './App.css';
import Header from './view/comp/Header/Header';

function App() {


  const [name, setName] = useState('Jacob');

  function handleInput(e){
    const value = e.target.value;

    setName(value);
  }

  return (
    <div className="App">
      <Header title='Hello' name={name}/>
      <input type='text' placeholder='Enter a name' onKeyUp={handleInput}/>
    </div>
  );
}

export default App;
