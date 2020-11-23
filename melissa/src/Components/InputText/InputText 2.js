import './InputText.css';
import {DB} from '../../firebase/firebaseConfig';

function InputText(){
    
    function handleSubit(e){
        e.preventDefault();

        console.log(e.target.children.input.value)
    }
    
    return(
        <form className='InputText' onSubmit={handleSubmit}>
            <textarea name='input' placeholder='Write a message'>

            </textarea>
            <button type='submit'>Send</button>
        </form>
    )
}

export default InputText;