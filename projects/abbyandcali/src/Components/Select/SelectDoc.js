import './SelectDoc.css';
import { useState } from 'react';
import { DB } from '../FirebaseConfig'

function SelectDoc() {
    
    //event listener for each item (1 --> 10) to get the id of what is clicked
    function Add(number) {
        console.log(number)
        let element = document.getElementById('box' + number)
        console.log(element)
        //element.style.backgroundColor = "rgb(81, 186, 186);"
    }


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

            <h4 id="sentenceHeader">Sentences</h4>

            <div id="selectScreenReminder"></div>
        </div>



    );

}


export default SelectDoc;
