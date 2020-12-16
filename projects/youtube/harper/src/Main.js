import './Main.css';
import { useEffect, useState } from 'react'
import {DB} from './firebaseConfig'
import{
    useParams
} from 'react-router-dom';

function Main() {

  let {userId}= useParams();  
  const [vidoeUrl, setVideoUrl] = useState('HEQcQm21DlY')
  const [videos, setVideos]=useState([])

  useEffect(()=>{
    if(!userId){
        userId=getUserUID();
    }
    
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

  function deleteVideo(videoId){
    
    const userId = getUserUID();
    DB.collection('lists').doc(userId)
    .collection('videos')
    .doc(videoId)
    .delete()
    .then(()=>{console.log('delted video', videoId)})
    .catch(e=>{console.error(e)})
  }

  return (
    <div className="App">
      <form onSubmit={handleUrl}>
        <input type='text' name='url'/>
        
      </form>
      <header className="App-header">
        {videos.map((video, index)=>{
          console.log(video)
          return ( <div>
            <iframe title='some video' width="560" height="315" src={`https://www.youtube.com/embed/${video.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onClick={()=>{deleteVideo(video.videoId)}}>Delete</button>
            </div>
            )
        })
      }
        </header>
    </div>
  );
}

export default Main;

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