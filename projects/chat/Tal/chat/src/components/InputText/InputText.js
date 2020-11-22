import './InputText.css';
import { DB } from '../../firebase/firebaseConfig';

function InputText() {


    function handleSubmit(e) {
        try {
            e.preventDefault();

            const inputText = e.target.children.input.value;

            DB.collection('messages').add({ message: inputText, time: new Date().getTime() })
                .then(() => { console.log('message was saved') })
                .catch(e => { console.error(e) })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form className='InputText' onSubmit={handleSubmit}>
            <textarea name='input' placeholder='Write a message'>

            </textarea>
            <button type='submit'>Send</button>
        </form>
    )
}

export default InputText;

