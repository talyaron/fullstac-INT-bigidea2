import './AddDoc.css';
import { useState } from 'react';
import { DB } from '../FirebaseConfig'

function AddDoc() {
    const [emojis, setEmojis] = useState([])
    const [sentences, setSentences] = useState([])

    function handleEmojiUrl(e) {
        e.preventDefault();
        let url = e.target.children.urlInput.value
        console.log("emoji URL: " + url)
        setEmojis([...emojis, url])
        console.log(emojis)
        document.getElementById('urlInput').value = ''
        document.getElementById('emojisDisplay').innerHTML += `<img src="${url}" class="emojiImage"/>`
        DB.collection('emotions').doc('emojis').update({
            emojis
        })
    







        /*for (let i=0; i < 3; i++) {
            let emojiVar = "emoji"+i
            let emojiURL = e.target.children.urlInput.value
            console.log("emoji URL: " + emojiURL)
            setEmojis([...emojis, emojiURL])
            console.log(emojis)
            DB.collection('emotions').doc('emojis').set({${emojiVar}: emojiURL})
            .catch(e => {console.error(e)})
        }
        document.getElementById('urlInput').value = ''*/
        //let emojiDocName
        /*if (emojis.length < 3) {
            let emojiURL = e.target.children.urlInput.value
            console.log("emoji URL: " + emojiURL)
            setEmojis([...emojis, emojiURL])
            console.log(emojis)
            document.getElementById('urlInput').value = ''*/

        //DB.collection('emotions').doc('emojis').set({emojiURL})
        //.catch(e => {console.error(e)})
        //let emojiDocName = "emoji"+emojis.length
        //console.log(emojiDocName)
        //DB.collection('emotions').doc(emojiDocName).set({emojiURL: emojiURL})
        //.catch(e => {console.error(e)})
        /*DB.collection('emotions').get()
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

    function handleSentence(e) {
        e.preventDefault();
        let sentenceSubmitted = e.target.children.sentenceInput.value;
        console.log("sentence: " + sentenceSubmitted)
        setSentences([...sentences, sentenceSubmitted])
        document.getElementById('sentenceInput').value = ''
        document.getElementById('sentencesDisplay').innerHTML += `<p class="sentence">${sentenceSubmitted}</p>`
        DB.collection('emotions').doc('sentences').update({
            sentences
        })
    
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
                <input type="url" placeholder="enter emoji URLs" id="urlInput" />
                <input type="submit" value="add emoji" id="submitBtn" />
            </form>
            <div id="emojisDisplay"></div>

            <div><h4 id="sentenceHeader">Sentences</h4>
                <form onSubmit={handleSentence} className="formURL">
                    <input type="text" placeholder="enter sentences" id="sentenceInput" />
                    <input type="submit" value="add sentence" id="submitBtn2" />
                </form>
                <div id="sentencesDisplay"></div>
            </div>

        </div>



    );

}
/*         {
                    emojis.map((emoji, index) => {
                        return <img src={emoji} key={index} className="emojiImage" />
                    })
                }
                {
                    sentences.map((sentence, index) => {
                        return <p key={index} className="sentence">{sentence}</p>
                    })
                } */

export default AddDoc;
