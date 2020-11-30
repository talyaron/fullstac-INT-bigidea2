import './App.css';
import { useState } from 'react';

function App() {
  const [imgs, setImgs] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    const src = e.target.children.img.value;
    const text = e.target.children.text.value;
    console.log(imgs)

    setImgs([...imgs, { src, text }])
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Image URL' name='img' />
        <input type='text' placeholder='Enter Image Description' name='text' />
        <input type='submit' value='submit' />
      </form>
      {/* element = part of an array, image in this case */}
      {imgs.map((element, index) => {
        return (<div key={index}>
          <img src={element.src} />
          <p>{element.text}</p>
        </div>)
      })}
    </div>
  );
}

export default App;