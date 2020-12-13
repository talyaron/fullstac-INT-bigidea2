import "./send.css"
import {DB} from "../firebase/firebaseConfig"

function SendPage(){
    let myName = localStorage.getItem("Name")
    let myId = localStorage.getItem("userUID")
    let myEmoji = localStorage.getItem("Emoji")
    let myComment = localStorage.getItem("Comment")
    let messageNumber;
    
    DB.collection("Emojis").get().then(emojiDB=>{

        localStorage.setItem("Sent Messages", emojiDB.size) 
        console.log(emojiDB.size)
     })
    

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
        DB.collection("Emojis").get().then(emojiDB=>{

            localStorage.setItem("Sent Messages", emojiDB.size) 
        })

        messageNumber = Number(localStorage.getItem("Sent Messages"))
        messageNumber += 1

        //console.log({["Message "+messageNumber]: {"Name": myName, "Emoji": myEmoji, "comment": myComment}})
        DB.collection("Emojis").doc("Message "+ messageNumber).set(
            {[myId]: {
                "Name": myName, 
                "Emoji": myEmoji, 
                "comment": myComment
            }}
        )
        
    }
}

export default SendPage