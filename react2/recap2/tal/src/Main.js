import {useState ,useEffect} from 'react';
import './Main.css';
import Header from './view/comp/Header/Header';
import FoodCard from './view/comp/FoodCard/FoodCard';

import {DB} from './functions/firebaseConfig';




function Main() {

  useEffect(()=>{
    DB.collection('foods').onSnapshot(foodsDB=>{
      const foodsTemp = [];
      foodsDB.forEach(foodDB=>{
        foodsTemp.push(foodDB.data().name)

      })

      setFoods(foodsTemp)
    })
  },[])
  

  const [name, setName] = useState('Jacob');
  const [foods, setFoods] = useState(['Falalfel', 'Pizza', 'Sushi','Sabich', 'Shaurma']);

  function handleInput(e){
    const value = e.target.value;

    setName(value);
  }

  return (
    <div className="Main">
      <Header title='Hello' name={name}/>
      <input type='text' placeholder='Enter a name' onKeyUp={handleInput}/>
      <h2>Best foods of Israel</h2>
      {foods.map((food, index)=>{
         return <FoodCard key={index} food={food} />
      })

      }

    </div>
  );
}

export default Main;
