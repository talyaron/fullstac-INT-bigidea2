import './InputText.css'
import '../../firebase/firebaseConfig'
import { DB } from '../../firebase/firebaseConfig';
function InputText() {
    function handleSubmit(e) {
        try {
            e.preventDefault();

            const inputText = e.target.children.input.value
            DB.collection('reactChat').add({ message: inputText, time: new Date().getTime() })
                .then(() => { console.log('Done') })
                .catch(e => { console.error(e) })
        } catch (e) {
            console.error(e)
        }

    }
    return (

        <form className='InputText' onSubmit={handleSubmit}>
            <textarea name='input' placeholder='write'>

            </textarea>
            <button type='submit'>Submit</button>
           
        </form>




    )

}

export default InputText