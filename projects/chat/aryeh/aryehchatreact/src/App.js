import { useEffect, useState } from 'react';
import './App.css';
import InputText from './components/InputText/Inputtext'
import Card from './components/Card/Card'
import { DB } from './firebase/firebaseConfig'
function App() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    DB.collection('reactChat').onSnapshot(messagesDB => {
      let messagesTempArray =[];
      messagesDB.forEach(messageDB => {
        console.log(messageDB.data())
        messagesTempArray.push(messageDB.data())
      })
      console.log(messagesTempArray)
      setMessages(messagesTempArray)
    })
  }, [])
  return (
    <div className="App">
      <InputText />
      <div className="messagesWrapper">
        
        {
          messages.map((message, index) => {
            return <Card message={message.message} key={index}/>
            
        })
        }
      </div>
    </div>
  );
}

export default App;
