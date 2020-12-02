import logo from './logo.svg';
import './App.css';

function App() {

  const  [image, setImage] = useState('');

  function handleSubmit;



  return (
    <div className="App">
      <form onSubmit={handleSubmit} id ="form">
        <input type="text" name="image" placeholder="enter imagine url"></input>
        <input type="text" name="text" placeholder="enter text"></input>
      </form>
    </div>
  );
}

export default App;
