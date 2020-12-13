import {useState} from 'react';
import "./main.css"

function Main(){
    let myName;
    const [name2, setname2] = useState("")

    return (
        <div className='main'> 
            <p id="name">Emoshapp {name2}</p>
            <form id="enter" onSubmit={enter}>
                <input type="text" name="eName" placeholder="Enter name"/>
                <input type="submit" value="enter"/>
            </form>
            
        </div>
    )

    function enter(e){
        e.preventDefault()
        myName = e.target.eName.value
        setname2((name2, "- " + myName))
        e.target.style.visibility = "hidden"

        localStorage.setItem("Name", myName)

        getUserUID()
    }

    function getUserUID() {
        //get the uid
        let userUID = localStorage.getItem('userUID');
        userUID =  Date.now().toString(36) + Math.random().toString(36).substr(2);
        //create a uid
        localStorage.setItem('userUID', userUID);
        
      }
}

export default Main