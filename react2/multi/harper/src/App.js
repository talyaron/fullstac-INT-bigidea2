
import './App.css';
import {useState} from 'react';

function App() {
  let num1=0;
  let num2=0;
  let answer=0;
  const [product,setProduct]=useState(0);

  function num1Change(){
    num1=document.getElementById('num1').value;
    num2=document.getElementById('num2').value;
    if(num1!==null){
      console.log(num1);
      getAnswer();
    }
  }

  function num2Change(){
    num2=document.getElementById('num2').value;
    num1=document.getElementById('num1').value;
    if(num2!==null){
      console.log(num2);
      getAnswer();
    }
  }

  function getAnswer(){
    let answer=num1*num2;
    setProduct(answer);
  }


  return (
    <div className="App">
      <p>
  <input type="number" id='num1' onChange={num1Change}/> x <input type="number" id='num2' onChange={num2Change}/> = {product}
     </p> 
    </div>
  );
}

export default App;
