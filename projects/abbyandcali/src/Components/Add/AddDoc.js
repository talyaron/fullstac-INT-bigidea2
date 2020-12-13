import './AddDoc.css';
import { useState, useEffect } from 'react';
import { DB } from '../FirebaseConfig'

function AddDoc() {
    const [emojis, setEmojis] = useState([])
    const [feeling, setFeeling] = useState(1)
    const [sentences, setSentences] = useState([])

    useEffect(()=>{
        DB.collection('emotions').onSnapshot(emotionsDB=>{

            const emojiesTemp = [], sentencesTmp = [];

            emotionsDB.forEach(emotionDB=>{
               

                if(emotionDB.data().type === 'emoji'){
               

                    emojiesTemp.push(emotionDB.data())
                }
                if(emotionDB.data().type === 'sentence'){
                    sentencesTmp.push(emotionDB.data())
                }

               
            })

            console.log(emojiesTemp)
            setEmojis(emojiesTemp);
            setSentences(sentencesTmp)
        })
    },[])

    function handleEmojiUrl(e) {
        e.preventDefault();
        let url = e.target.children.urlInput.value
        
        e.target.children.urlInput.value = '';
       

        DB.collection('emotions').add({
            text:url,
            type:'emoji',
            feeling:feeling 
        }).then(doc=>{
            console.log('added emotion', doc.id)
        }).catch(e=>{
            console.error(e)
        })



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
            <div id="emojisDisplay">
                {emojis.map((emoji, index) => {
                    console.log(emoji.text  )
                    return (<img src={emoji.text} key={index} className="emojiImage" alt='emoji' />)
                })
                }
            </div>

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
