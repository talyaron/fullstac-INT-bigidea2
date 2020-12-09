<<<<<<< HEAD
import "./main"

function MainPage(){
return (
    <div className='main'> 
        <p>Emoshapp</p>
    </div>
)
=======
import { Link } from "react-router-dom"
import "./main.css"

function Main(){
    return (
        <div className='main'> 
            <p id="name">Emoshapp</p>
            <input type="submit" value="enter" id="enter" onClick={enter}/>
        </div>
    )

    function enter(){
    }
>>>>>>> master
}

export default MainPage