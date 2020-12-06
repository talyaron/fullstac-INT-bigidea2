import './App.css';
import { useState } from 'react';

function App() {
  //use states
  const [images, setImages] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let src = e.target.children.image.value;
    let text = e.target.children.text.value;
    setImages([...images, { src: src, text: text }]);
    document.getElementById('form').reset();

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} id="form">
        <input type="text" name="image" placeholder="enter image url" />
        <br></br>
        <input type="text" name="text" placeholder="enter text" />
        <br></br>
        <input type="submit" value="Submit" />



      </form>
      <div className='imageWrapper'>
        {images.map((img, index) => {
          return (<div key={index}>
            <img src={img.src} /><p>{img.text}</p>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
