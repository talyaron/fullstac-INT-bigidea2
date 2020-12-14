import { useState } from 'react';
import './App.css';



function App() {

  const [link, setLinks] = useState();

  function addLink(e){
    e.preventDefault();
    setLinks (e.target.children.url.value);
  }

  return (
    <div className="App">
      <form onSubmit={addLink}>
        <input type='uniqueCode' name='url' placeholder='Add url' />
        <input type='submit'></input>
      </form>
   </div>
  );
}

export default App;
