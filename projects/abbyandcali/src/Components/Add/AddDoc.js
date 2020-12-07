import './AddDoc.css';
import { useState } from 'react';
import { DB } from '../FirebaseConfig'

function AddDoc() {
    const [emojis, setEmojis] = useState([])
    const [sentences, setSentences] = useState([])

    //when submit the emoji, it gets added to an array (up to 3 emojis)
    function handleEmojiUrl(e) {
        e.preventDefault();
        //let emojiDocName
        if (emojis.length < 3) {
            let emojiURL = e.target.children.urlInput.value
            console.log("emoji URL: " + emojiURL)
            setEmojis([...emojis, emojiURL])
            document.getElementById('urlInput').value = ''
            //DB.collection('emotions').doc('emojis').set({emojiURL})
            //.catch(e => {console.error(e)})
            //emojiDocName = "emoji"+emojis.length
            //console.log(emojiDocName)
            //DB.collection('emotions').doc(emojiDocName).set({emojiURL: emojiURL})
            //.catch(e => {console.error(e)})
            /*DB.collection('emotions')
                .then(emotionDB => {
                    let { emojis } = emotionDB.data();

                    console.log(emojis)
                    //if emojis do not exist in DB
                    if (emojis === undefined) {
                        emojis = {};
                    }
                    emojis[emojiURL] = { emojiURL };

                    console.log(emojis)


                    DB.collection('emojis').doc(emojis).update({ emojis })
                        .then(() => { console.log('emoji stored') })
                        .catch(e => {
                            console.error(e)
                        })
                })*/

        }
        /*for (let i=1; i<4; i++){
                let countingVar = "link"+i
                DB.collection('emotions').doc('emojis').set({`{${countingVar}: emoji}`})
                .catch(e => {console.error(e)})
            }*/
        
        /*emojis.forEach(emoji => {
            for (let i=1; i<4; i++){
                let countingVar = "link"+i
                DB.collection('emotions').doc('emojis').set({countingVar: emoji})
                .catch(e => {console.error(e)})
            }
        }
        )*/
    }

        function handleSentence(e) {
            e.preventDefault();
            if (sentences.length < 5) {
                let sentenceSubmitted = e.target.children.sentenceInput.value;
                console.log("sentence: " + sentenceSubmitted)
                setSentences([...sentences, sentenceSubmitted])
                document.getElementById('sentenceInput').value = ''
            } else {
                document.getElementById('selectScreenReminder').innerText = "PRESS SELECT"
            }

        }
        return (
            <div id="addDoc">
                <h4 id='rateFeelingsHeader'>Rate your feelings</h4>
                <div id="wrapperButtonNumbers">
                    <input type="button" value="1" className="item" id="box1" />
                    <input type="button" value="2" className="item" id="box2" />
                    <input type="button" value="3" className="item" id="box3" />
                    <input type="button" value="4" className="item" id="box4" />
                    <input type="button" value="5" className="item" id="box5" />
                    <input type="button" value="6" className="item" id="box6" />
                    <input type="button" value="7" className="item" id="box7" />
                    <input type="button" value="8" className="item" id="box8" />
                    <input type="button" value="9" className="item" id="box9" />
                    <input type="button" value="10" className="item" id="box10" />
                </div>
                <h4 id="emojisHeader">Emojis</h4>
                <form onSubmit={handleEmojiUrl} className="formURL">
                    <input type="url" placeholder="enter 3 emoji URLs" id="urlInput" />
                    <input type="submit" value="add emoji" id="submitBtn" />
                </form>

                {
                    emojis.map((emoji, index) => {
                        return <img src={emoji} key={index} className="emojiImage" />
                    })
                }
                <h4 id="sentenceHeader">Sentences</h4>
                <form onSubmit={handleSentence} className="formURL">
                    <input type="text" placeholder="enter 5 sentences" id="sentenceInput" />
                    <input type="submit" value="add sentence" id="submitBtn" />
                </form>
                {
                    sentences.map((sentence, index) => {
                        return <p key={index} className="sentence">{sentence}</p>
                    })
                }
                <div id="selectScreenReminder"></div>
            </div>



        );

    }


    export default AddDoc;
