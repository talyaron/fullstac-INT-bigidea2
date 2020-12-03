import './Main.css';
import Header from '../Header/Header';
import {useState, useEffect} from 'react'
import FoodCard from '../FoodCard/FoodCard';
import FirebaseConfig from '../FirebaseConfig';
import {DB} from '../FirebaseConfig';
function Main() {
  
  useEffect(()=>{
    DB.collection('foods').onSnapshot(foodsDB=>{
      foodsDB.forEach(foodDB=>{
        const foodsTemp = [];
        foodsDB.forEach(foodDB =>{
          foodsTemp.push(foodDB.data().name)
        })
        setFoods(foodsTemp)
      })
    })
  }, [])
  //useEffect: to run something once when you start 

  const [name, setName] = useState('Abby')
  const [foods, setFoods] = useState(['falafel', 'pizza', 'sushi', 'sabich'])

  function handleInput(e) {
    //don't need e.preventDefault bc is not onSubmit
    const value = e.target.value;
    setName(value);
  }

  console.log(foods)
    return (
        <div className="Main">
            <Header title='Hello' name={name}/>
            <input type="text" placeholder="enter name" onKeyUp={handleInput}/>
          <h2>Foods of Israel</h2>
          {foods.map((food, index)=>{
            return <FoodCard key={index} food={food}/>
          })}
        </div>
        //onKeyup is the event listener
    );
}

export default Main;
