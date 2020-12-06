import {useState} from 'react';

function SelectPage(){
    const [images, setImage] = useState(["jh"]);

    let oneList = [
        "https://w7.pngwing.com/pngs/210/306/png-transparent-face-with-tears-of-joy-emoji-crying-laughter-sticker-sad-emoji-pic-crying-emoji-icon-smiley-infant-anger.png",
    ]

    return(
        <div>
    <h2> Expressions for Feelings</h2>
    <button id='one' onClick = {Pictures} > 1 </button>
    <button id='two' onClick = 'pictures'> 2 </button>
    <button id='three' onClick = 'pictures'> 3 </button>
    <button id='four' onClick = 'pictures'> 4 </button>
    <button id='five' onClick = 'pictures'> 5 </button>
    <button id='six' onClick = 'pictures'> 6 </button>
    <button id='seven' onClick = 'pictures'> 7 </button>
    <button id='eight' onClick = 'pictures'> 8 </button>
    <button id='nine' onClick = 'pictures'> 9 </button>
    <button id='ten' onClick = 'pictures'> 10 </button>
    <div> <input type='submit' text='SEND'></input></div>
    <h2> Emojis</h2>
    <div>
        {images.map((image, index)=>{
            return <img src={image} key={index} alt="hello"/>
        })}
    </div>
    <h2> Sentences</h2>
    <input type='text' placeholder='Add a sentence'></input>
    <input type='submit'></input>
    </div>
    )

   function Pictures(e){
        {
            if (e.target.id === 'one') {
                setImage((images, oneList))
            }



        }
    }

}
export default SelectPage


