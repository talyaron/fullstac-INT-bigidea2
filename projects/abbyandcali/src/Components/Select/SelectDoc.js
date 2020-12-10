import './SelectDoc.css';
import { useState, useEffect } from 'react';
import { DB } from '../FirebaseConfig'

function SelectDoc() {
    const [emojisArray, setEmotions] = useState([]);
    //event listener for each item (1 --> 10) to get the id of what is clicked
    function Add(number) {
        console.log(number)
        let element = document.getElementById('box' + number)
        console.log(element)
        //element.style.backgroundColor = "rgb(81, 186, 186);"
    }
    document.getElementById('emojiDisplay')

    const [emojis, setEmojis] = useState([])
    const [sentences, setSentences] = useState([])
    useEffect(()=>{
        DB.collection('emotions').onSnapshot(emotionsDB=>{
            const emojisTemp = [], sentencesTmp = [];
            emotionsDB.forEach(emotionDB=>{
                if(emotionDB.data().type === 'emoji'){
                    emojisTemp.push(emotionDB.data())
                }
                if(emotionDB.data().type === 'sentence'){
                    sentencesTmp.push(emotionDB.data())
                }
            })
            console.log(emojisTemp)
            setEmojis(emojisTemp);
            setSentences(sentencesTmp)
        })
    },[])
    


    //DB //for each emojiURL - add <img>emoji with class name and do format there
    

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
            <div id="emojiDisplay"></div>
            <div id="emojisDisplay">
                {emojis.map((emoji, index) => {
                    console.log(emoji.text  )
                    return (<img src={emoji.text} key={index} className="emojiImage" alt='emoji' />)
                })
                }
            </div>
            <h4 id="sentenceHeader">Sentences</h4>
            <div id="sentenceDisplay"></div>

            <div id="selectScreenReminder"></div>
        </div>



    );

}


export default SelectDoc;
