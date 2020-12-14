import './App.css';
import { useEffect, useState } from 'react'
import {DB} from './firebaseConfig'

function App() {

  const [vidoeUrl, setVideoUrl] = useState('HEQcQm21DlY')
  const [videos, setVideos]=useState([])

  useEffect(()=>{
    const userId=getUserUID();
    console.log('listening')
    DB.collection('lists').doc(userId).collection('videos').onSnapshot(videosDB=>{
      let tmpVideos=[];
      videosDB.forEach(videoDB=>{
        tmpVideos.push(videoDB.data())
      })
      console.log(tmpVideos)
      setVideos(tmpVideos);
    })
  },[])

  function handleUrl(e) {
      e.preventDefault()
      let id = e.target.children.url.value;
      let newId=''

      if (id.startsWith('https://www.youtube.com/watch?v=')) {
        newId =id.slice(32, 43)

        
      } else if (id.startsWith('youtube.com/watch?v=')) {
        newId =id.slice(20, 31)
        
      }
      console.log(newId)
      setVideoUrl(newId)

      const userId=getUserUID();
      //save to DB
      DB.collection('lists').doc(userId)
      .collection('videos').doc(newId).set({videoId:newId, date:new Date()})
      .then((doc)=>{console.log(`video was saved for user ${userId}, under Id ${doc.id}`)})
      .catch(e=>console.error(e))
  }

  return (
    <div className="App">
      <form onSubmit={handleUrl}>
        <input type='text' name='url'/>
        
      </form>
      <header className="App-header">
        {videos.map((video, index)=>{
          return ( <iframe title='some video' width="560" height="315" src={`https://www.youtube.com/embed/${video.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
        }
       
        })
        </header>
    </div>
  );
}

export default App;

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//returns the uid
function getUserUID() {
    //get the uid
    let userUID = sessionStorage.getItem('userUID');
    if (userUID === null) {
        userUID = uid();
        //create a uid
        sessionStorage.setItem('userUID', userUID);
    }
    return userUID;
}