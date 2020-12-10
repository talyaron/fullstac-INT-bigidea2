import './SelectDoc.css';
import { useState, useEffect } from 'react';
import { DB } from '../FirebaseConfig'
import List from '../List/ListDoc'


function SelectDoc() {
    //event listener for each item (1 --> 10) to get the id of what is clicked
    let selectionObject = {
        feeling: '',
        emoji: '',
        sentence: ''
    }
    const [feeling, setFeeling] = useState(1)
    function Add(number) {
        console.log(number)
       setFeeling(number)
        //element.style.backgroundColor = "rgb(81, 186, 186);"
        selectionObject.feeling = number
    }
    document.getElementById('emojiDisplay')

    const [emojis, setEmojis] = useState([])
    const [sentences, setSentences] = useState([])
    useEffect(() => {
        DB.collection('emotions').onSnapshot(emotionsDB => {
            const emojisTemp = [], sentencesTemp = [];
            emotionsDB.forEach(emotionDB => {
                if (emotionDB.data().type === 'emoji') {
                    emojisTemp.push(emotionDB.data())
                }
                if (emotionDB.data().type === 'sentence') {
                    sentencesTemp.push(emotionDB.data())
                }
            })
            console.log(emojisTemp)
            setEmojis(emojisTemp);
            setSentences(sentencesTemp)
        })
    }, [])


    const [emojiURL, setEmojiURL] = useState('https://i.pinimg.com/originals/29/3b/84/293b84f3561f0f895b54554ff195ea1a.png')
    function handleEmojiClick(link) {
        console.log(link)
        setEmojiURL(link)
        selectionObject.emoji = link
    }
    const [message, setMessage] = useState("I'm happy")
    function handleSentenceClick(sentence) {
        console.log(sentence)
        setMessage(sentence)
        selectionObject.sentence = sentence
    }
    function handleSelectionSubmit() {
        console.log(selectionObject)
        DB.collection('emotions').doc('selection').update({ feeling: feeling, emojiURL: emojiURL, message: message })
        document.getElementById('listImport').innerHTML = "<List/>"
    }


    /*useEffect(()=> {
        DB.collection('emotions').onSnapshot(emojisArrayDB => {
            let emojisArray = []
            emojisArrayDB.forEach(emojisArrayDB.data())
            console.log(emojisArrayDB.data())
            emojisArray.push(emojisArrayDB.data())
            console.log("array: "+ emojisArray)
        })
        setEmotions(emojisArray)

    })
}, [])*/

    return (
        <div id="selectDoc">
            <h4 id='rateFeelingsHeader'>Rate your feelings</h4>
            <div id="wrapperButtonNumbers">
                <input type="button" value="1" className="item" id="box1" onClick={() => Add(1)} />
                <input type="button" value="2" className="item" id="box2" onClick={() => Add(2)} />
                <input type="button" value="3" className="item" id="box3" onClick={() => Add(3)} />
                <input type="button" value="4" className="item" id="box4" onClick={() => Add(4)} />
                <input type="button" value="5" className="item" id="box5" onClick={() => Add(5)} />
                <input type="button" value="6" className="item" id="box6" onClick={() => Add(6)} />
                <input type="button" value="7" className="item" id="box7" onClick={() => Add(7)} />
                <input type="button" value="8" className="item" id="box8" onClick={() => Add(8)} />
                <input type="button" value="9" className="item" id="box9" onClick={() => Add(9)} />
                <input type="button" value="10" className="item" id="box10" onClick={() => Add(10)} />
            </div>
            <h4 id="emojisHeader">Emojis</h4>
            <div id="emojisDisplay">
                {emojis.map((emoji, index) => {
                    return (<img src={emoji.text} key={index} className="emojiImage" alt='emoji' onClick={() => handleEmojiClick(`${emoji.text}`)} />)
                })
                }
            </div>
            <h4 id="sentenceHeader">Sentences</h4>
            <div id="sentencesDisplay"></div>
            {
                sentences.map((sentence, index) => {
                    return (<p key={index} className="sentence" onClick={() => handleSentenceClick(`${sentence.text}`)}>{sentence.text}</p>)
                })
            }
            <input type="submit" value="click here to finalize your selection" onClick={handleSelectionSubmit} />
<div id="listImport"></div>
<List/>
        </div>



    );

}


export default SelectDoc;
