import {useEffect, useState} from 'react';
import './App.css';
import {DB} from './firebase/firebaseConfig';

import InputText from './components/InputText/InputText';
import Card from './components/Card/Card';

function App() {

  const [messages, setMessages] = useState([]);

useEffect(()=>{
  //open a listener to messages
  DB.collection('messages2').onSnapshot(messages2DB=>{
    let messagesTempArray=[];
    messages2DB.forEach(messageDB =>{
      console.log(messageDB.data())
      messagesTempArray.push(messageDB.data());
      console.log(messagesTempArray)
    })
    setMessages(messagesTempArray);
  })
}, [])

  return ( 
    <div className='App'>
      <div className='messagesWrapper'>
        {
          messages.map((message, index)=>{
            return <Card message={message.message} key={index} />
          })
        }
      </div>
      <InputText />
    </div>
    );
}

export default App;
