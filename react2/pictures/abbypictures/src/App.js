import './App.css';
import { useState } from 'react';

function App() {
 // const [fullArray, setFinalItems] = useState([]);
 const [items, setItems] = useState([]);

  let text
  let image 

  function handleSubmit(e) {
    e.preventDefault();
    image = e.target.children.url.value;
    text = e.target.children.imageText.value;
    setItems([...items, {image, text}])
    //pairing(images.length)
  }
  
  /*function pairing(length){
    let lengthArray = length
    console.log(lengthArray)
    let counter = 1;
    for(let i=0; i<lengthArray; i++){
      if(counter % 2 == 0) {
        fullArray.push(image)
        counter++
      } else {
        fullArray.push(text)
        counter++
      }
    }
    console.log(fullArray)
    setFinalItems(fullArray)
  }*/

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='url' name='url' placeholder='insert image url' />
        <input type='text' name='imageText' placeholder='image text' />
        <input type='submit' value='add' />
      </form>
    {items.map((item, index) => {
    return (
      <div key={index}>
        <img className='image' src={item.image}/>
        <p className='text'>{item.text}</p>
        </div>
    )
    })}
    </div>
  );
}

/*{images.map((image, index) => {
  return (<img key={index} src={image}></img>)
})}
     {texts.map((text, index) => {
  return (<p key={index}>{text}</p>)
})}*/




export default App;
