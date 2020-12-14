import './SendDoc.css'
import { useState, useEffect } from 'react';
import { DB } from '../FirebaseConfig';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function SendDoc() {
    const [emojiURL, setEmojiURL] = useState('');

    const [message, setMessage] = useState('');

    useEffect(() => {
        DB.collection('emotions').doc('selection').onSnapshot(emotionsDB => {
            setEmojiURL(emotionsDB.data().emojiURL);
            console.log(emojiURL)

            setMessage(emotionsDB.data().message);
            console.log(message)
        })
    }, [])

    return (
        <div id="SendDoc">
            <img src={emojiURL} id="chosenEmoji" />
            <p id="chosenMessage">{message}</p>
            <div><Link to="/AddDoc" id="linkClick">click here to send your message</Link></div>
        </div>
    )
}


export default SendDoc;