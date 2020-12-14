import Header from './view/components/Header/Header';
import FoodCard from './view/components/FoodCard/FoodCard';
import {useState, useEffect} from 'react';
import './Main.css';
import {DB} from './functions/firebaseConfig';

function Main() {
  useEffect(()=>{
    DB.collection('foods').onSnapshot(foodsDB=>{
      const foodsTemp=[];
      foodsDB.forEach(foodDB=>{
        foodsTemp.push(foodDB.data())

      })
      setFoods(foodsTemp);

    })
  },[])

  const [name,setName]=useState('Harper');
  const [foods, setFoods]=useState(['Falafel', 'Pizza', 'Sushi', 'Sabich']);

  function handleInput(e){
    const value=e.target.value;
    setName(value);
  }

  return (
    <div className="Main">
      <Header title="Hello" name={name}/>
      <input type="text" placeholder="enter a name" onKeyUp={handleInput}/>
      <h2>Best foods of Israel</h2>
      {foods.map((food,index)=>{
        return <FoodCard key={index} food={food}/>
      })}
      
    </div>
  );
}

export default Main;
