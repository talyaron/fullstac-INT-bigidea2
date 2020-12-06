import './App.css';
//first step to useState: 
import { useState } from 'react';

function App() {
  const [imgs, setImgs] = useState('');
  
  function handleInput(e) {
    e.preventDefault()
    const src=e.target.children.img.value;
    const text=e.target.children.text.value;
    console.log(imgs);
    setImg([...imgs,{src,text}])
  }
  }
    return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Image URL' name='img' />
        <input type='color' name='Enter Image Description' name='text' />
        <input type='submit' value='Submit' />
        </form>
        {/*element=part of an array, image in this case*/}
      {imgs.map((element,index))=>}
      

      
  );
}

export default App;
