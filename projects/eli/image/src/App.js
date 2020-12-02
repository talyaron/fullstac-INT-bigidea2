import './App.css';
import { useState} from 'react';

function App() {
  const [images, setImage] = useState([]);
  const [comments, setComment] = useState([]);
  

  return (
    <div className="App">
      <h1>
        <form onSubmit={addImage}>
          <input type ="text" name="image" placeholder="Input image url"/>
          <input type ="text" name="comment" placeholder="Input a comment"/>
          <input type="submit"/>
        </form>
        
      </h1>
      <div id="container">
        {
          images.map((i, index)=>{
            return (
              <div className="box">
                <img className="image" key={index} src={i} alt="☺☻"/>
                <p className="comment">{comments[index]}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );

  function addImage(e){
    e.preventDefault()
    
    setImage([...images, e.target.image.value])
    setComment([...comments, e.target.comment.value])

    console.log(images, comments)
  }
}

export default App;
