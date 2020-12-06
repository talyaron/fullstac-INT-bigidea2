import {useState, useEffect} from 'react';
import './Main.css';
import Header from "./view/comp/Header/Header.js"
import FoodCard from "./view/comp/FoodCard/FoodCard.js"
import {DB} from "./functions/firebaseConfig.js"

function Main() {

  useEffect(()=>{
    DB.collection("foods").onSnapshot(foodsDB=>{
      const foodsTemp = []
      foodsDB.forEach(food=>{
        foodsTemp.push(food.data().name)
      })

      setFood(foodsTemp)
    })
  },[])

  const [name, setName] = useState()
  const [foods, setFood] = useState([])
  const title = "Hello, "

  return (
    <div className="main">
      <Header title={title} name={name}/>
      <input type="text" placeholder="Enter your name" onChange={newName}/>
      <div>
        <form onSubmit={addFood}>
          <input type="text" name="faveFood" placeholder="Enter your favourite food"/>
          <input type="submit"/>
        </form>
        {
          foods.map((food, index)=>{
            return <FoodCard key={index} food={food}/>
          })
        }
      </div>
      <button onClick={temp}/>
    </div>
    
  );
  
  function newName(e){
    setName(e.target.value)
  }

  function addFood(e){
    e.preventDefault()

    console.log(e.target.children.faveFood.value)

    setFood([...foods, e.target.children.faveFood.value])

    if (typeof(foods[0]) === "undefined"){
      foods.shift()
    }

    console.log(foods)
  }

  
  function temp(){
    if (typeof(foods[0]) === "undefined"){
      foods.shift()
    }

    console.log("hello!")
    console.log(foods)
  }
}

export default Main;
