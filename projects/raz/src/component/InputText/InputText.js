import './InputText.css'
import {DB} from '../../firebase/firebaseConfig'

function InputText(){

import Card from './comp'
    function handleSubmit(e){

    }
    try
    
        e.preventDefault();

        const InputText=e.target.children.input.value;

        DB.collection('messages').add({message:InputText, time:new Date().getTime})
        .then ()) {console.log}('message was saved')


        console.log(e.target.children.input.value)

    }
    return(
        <form className='inputText'>
            <textarea placeholder='Write a message'>

            </textarea>
            <button type='submit'>SEND</button>
        </form>
    }

export default InputText;