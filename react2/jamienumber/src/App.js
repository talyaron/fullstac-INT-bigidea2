import logo from './logo.svg';
import './App.css';

const [answer, set answer]= useState('')

function App() {
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="number" id="a"></input>
        <input type="number" id="b"></input>
      </form>
    </div>

    <div>{answer}</div>
  );
}

export default App;
