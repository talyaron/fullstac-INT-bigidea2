import './ListDoc.css';
import { useState, useEffect } from 'react';
import { DB } from '../FirebaseConfig';

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


    return (
        <div id="ListDoc">
            <img src={emojiURL.text} id="chosenEmoji" />
            <p id="chosenFeeling">Feeling: {feeling}</p>
            <p id="chosenMessage">{message}</p>
        </div>
    );
}
export default ListDoc;
