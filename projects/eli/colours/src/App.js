import './App.css';
import { useState} from 'react';

function App() {
    const [colors, setcolor] = useState([])
  
  

  return (
    <div className="App">
      <h1>
        <form onSubmit={addcolor}>
          <input type ="color" name="color"/>
          <input type="submit" value="Add new box"/>
        </form>
        
      </h1>
      <div>
        {colors.map((i, index)=>{
          return <div key={index} style={{backgroundColor: i}} className="box">{i}</div>
        })
        }
      </div>
    </div>
  );

  function addcolor(e){
    e.preventDefault()
    //let newColor = e.target.color.value
    
    setcolor([...colors, e.target.color.value])

    console.log(colors)
  }
}

export default App;
