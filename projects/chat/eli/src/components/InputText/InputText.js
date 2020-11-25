import './InputText.css';

function InputText(){
    return(
        <form className='InputText'>
            <textarea placeholder='Write a message'>

            </textarea>
            <button type='submit'>Send</button>
        </form>
    )
}

export default InputText