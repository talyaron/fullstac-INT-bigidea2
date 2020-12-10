import "./send.css"
import {DB} from "../firebase/firebaseConfig"

function SendPage(){
    let myName = localStorage.getItem("Name")
    let myId = localStorage.getItem("userUID")
    let myEmoji = localStorage.getItem("Emoji")
    let myComment = localStorage.getItem("Comment")
    let MessageNumber = localStorage.getItem("Sent Messages")

    return (
        <div id="container">
            <p>Name: {myName}</p>
            <p>Id: {myId}</p>
            <p>Emoji: <img id="image" src={myEmoji} alt="Not chosen yet"/></p>
            <p>Comment: {myComment}</p>
            <input type="submit" value="Send" onClick={sendToDb}/>
        </div>
    )

    function sendToDb(){
        console.log({["Message "+MessageNumber]: {"Name": myName, "Emoji": myEmoji, "comment": myComment}})
        DB.collection("Emojis").doc("Message "+MessageNumber).set(
            {[myId]: {
                "Name": myName, 
                "Emoji": myEmoji, 
                "comment": myComment
            }}
        )
        
        MessageNumber += 1
        localStorage.setItem("Sent Messages", MessageNumber)
    }
}

export default SendPage