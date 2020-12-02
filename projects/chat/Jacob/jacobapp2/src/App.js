import { useEffect, useState } from 'react'
import './App.css';
import InputText from './components/InputText/InputText'
import { DB } from './firebase/firebaseConfig'
import Card from './components/Card/Card'

function App() {

const [messages, setMessages] = useState([])

  useEffect(() => {
    //open a listener to messages
    DB.collection('messages').onSnapshot(messagesDB => {
      let messagesTempArray = []
      messagesDB.forEach(messageDB =>{
        console.log(messageDB.data())
        messagesTempArray.push(messageDB.data())
      })
        setMessages(messagesTempArray)
    })

  }, [])

  return (
    <div className="App">
      <div className='messagesWrapper'>
        {
          messages.map((message,index)=>{
            return <Card message={message.message} key={index}/>
          })
        }
      </div>
      <InputText />
    </div>
  );
}

export default App;
