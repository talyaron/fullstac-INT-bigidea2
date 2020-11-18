import logo from './logo.svg';
import './App.css';
let counter= 0;
function App() {
    function handleClick(e) {
        

        setCounter(counter + 1); // render the DOM again, and set a new value for counter
    
        console.log('click',counter)
    }
    return (
        <div className= "App">
            <header className="app-header">
                <p>Jamie's App</p>
                <button onClick={handleeClick}>Add</button>
                <p>Added {counter} times</p>
            </header>
        </div>
    );
}