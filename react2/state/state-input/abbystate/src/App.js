import './App.css';
//first step to useState: 
import { useState } from 'react';

function App() {
  //initial value of the text is empty string bc is ''
  //text is the variable, setText is what updates that variable 
  //the state is "text", it's a variable
  //setText is changing the variable and **it changes on the dom too
  const [text, setText] = useState('');
  const [paragraphs, setParagraphs] = useState([])
  const [colors, setColors] = useState([]);

  function handleInput(e) {
    // e is for event 
    console.log(e.target.value)
    // ^^ on the event of keyup, the value associated with that listener is printed to the console
    //event target, input field and its value is the value when keyup event happens
    setText(e.target.value)
    // ^^ everytime there is a keyup, there is a change in the value of the text --> 
    //the setText updates it everytime it changes bc handleInput calls setText -- each time keyUp --> handleInput function--> text changes is set 
    //when change it --> changes the dom 
  }

  function handleSubmit(e) {
    // use e because it is an event that is occuring (you submitting the button)
    e.preventDefault()
    console.log(e.target.children.input.value);
    //e because an event is happening, children because the event is associated with the form 
    // you click on the form bc it's the form's event--> a child of the form is one of the inputs (there are 2 children)
    //you go inside the form to children, 2 children --> say ".input" to get that child by its name
    //then .value to get the value of it which is the text you put in 
    let userInput = e.target.children.input.value;
    setParagraphs([...paragraphs, userInput]);
    // ... takes the previous array and adds to it --> adds the userInput variable (inputted text, and it's update bc of setText)
    e.target.children.input.value = ''
  }

  function handleColor(e) {
    e.preventDefault()
    console.log(e.target.value)
    let colorInput = e.target.value;
    setColors([...colors, colorInput])

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter text' name='input' onKeyUp={handleInput} />
        <input type='color' name='inputColor' onChange={handleColor} />
        <input type='submit' value='Submit' />
      </form>

      <p>{text}</p>
      <h3>{text}</h3>

      {paragraphs.map((paragraph, index) => {
        return (<p key={index}>{paragraph}</p>)
      })}

      {colors.map((color, index) => {
        return (<div key={index} style={{backgroundColor: color}}>{color}</div>)
      })}


    </div>
  );
}
//when take an array and want to convert it to <p> or <div> then you use map
// want to take information and make a paragraph for each --> paragraphs.map, element is the paragrpah, index is number in array
//then from all this data, it makes an array and returns a paragraph with just {paragraph} not {paragraphs} and it returns it in a <p></p>
//and the key of it is its index bc it is an array 
//{paragraphs} is an array, map means it goes through all of them, like for each, index is its number in array 
// for each element in the dom it has a key 
export default App;
