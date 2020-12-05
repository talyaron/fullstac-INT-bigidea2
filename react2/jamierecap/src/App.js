import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Header';
import FoodCard from './FoodCard';



function App() {

  const [name, setName]= useState ('Jacob')
  const [foods, setFoods]= useState (['Falafel', 'Pizza', 'Sushi', 'Sabich', 'Shaurma' ]);

  function handleInput(e){
    const value= e.target.value;

    setName(value);
  }

  return (
    <div className="App">
      <Header title='Hello' name= {name}/>
      <input type='text' placeholder='Enter a name' onKeyUp= {handleInput}/>
      <h2> Israel's best foods </h2>
      {foods.map}((food, index)=>{
        return <FoodCard key={index} food={food}/>
      })
    </div>
  );
}

export default App;
