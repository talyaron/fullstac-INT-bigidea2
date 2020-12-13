import './ListDoc.css';
import { useState, useEffect } from 'react';
import { DB } from '../FirebaseConfig';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function ListDoc() {

    const [emojiURL, setEmojiURL] = useState('');

    const [feeling, setFeeling] = useState('');

    const [message, setMessage] = useState('');

    useEffect(() => {
        DB.collection('emotions').doc('selection').onSnapshot(emotionsDB => {
            setEmojiURL(emotionsDB.data().emojiURL);
            console.log(emojiURL)

            setFeeling(emotionsDB.data().feeling);
            console.log(feeling)

            setMessage(emotionsDB.data().message);
            console.log(message)
        })
    }, [])

    console.log(emojiURL, feeling, message)


    return (
        <div id="ListDoc">
            <img src={emojiURL} id="chosenEmoji" />
            <p id="chosenFeeling">Feeling: {feeling}</p>
            <p id="chosenMessage">Message: {message}</p>
            <div><Link to="/SendDoc" id="linkClick">click here to confirm your message</Link></div>
        </div>
        
    );
}
export default ListDoc;
