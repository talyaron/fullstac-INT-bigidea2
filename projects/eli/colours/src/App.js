import './App.css';
//import { useState} from 'react';

function App() {
  let color = "";
  let colors = [];
  let boxes = [];
    
  
  

  return (
    <div className="App">
      <h1>
        <form onSubmit={addbox}>
          <input type ="color" id="color"/>
          <input type="submit" value="Add new box"/>
        </form>
        
      </h1>
      <div>
        {colors.map(i=>{
          return <div>{i}</div>
        })
        }
      </div>
    </div>
  );

  function addbox(e){
    e.preventDefault()
    
    color = document.getElementById("color").value

    colors.push(color)
    console.log(colors)
  }
}

export default App;
