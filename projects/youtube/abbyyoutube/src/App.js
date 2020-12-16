import './App.css';
import { DB } from './Firebase';
import { useState, useEffect } from 'react';

function App() {

  const [links, setLinks] = useState([])
  const [linksFirebase, setLinksFirebase] = useState([])
  const [userId, setUserId] = useState('')
  const [linkId, setLinkId] = useState('')
  
  useEffect(() => {
    const userId = getUserUID();

    DB.collection('youtube').doc(userId).collection('videos').onSnapshot(videosDB => {
      let videoArray = [];
      videosDB.forEach(videoDB => {
        videoArray.push(videoDB.data())
      })
      setLinksFirebase(videoArray)
      console.log("videoArray" + videoArray)
    })
  }, [])

  function handleSubmitId(e) {
    
    e.preventDefault()
    console.log(e.target.children.input.value)
    if (e.target.children.input.value.startsWith('https://www.youtube.com/watch?v=', 0)) {
      handleLinkSeg(e.target.children.input.value.slice(32))
    } else if (e.target.children.input.value.startsWith('youtube.com/watch?v=', 0)) {
      handleLinkSeg(e.target.children.input.value.slice(20))
    }
    else {
      handleLinkSeg(e.target.children.input.value)
    }
  }

  function handleLinkSeg(submittedValue) {
    let link = submittedValue
    setLinkId(submittedValue)
    console.log(link);
    //DB.collection('youtube').add({ linkSegment: link })
    //document.getElementById('iframeId').src = "https://www.youtube.com/embed/" + link
    let fullLink = "https://www.youtube.com/embed/" + link
    setLinks([...links, fullLink])
    console.log(links)
    DB.collection('youtube').doc(userId)
    .collection('videos').doc(link).set({ videoId: link, date: new Date() })
    .then(() => { console.log(`Video saved; user: ${userId}; Id: ${link}`) })
    .catch(e => console.error(e))
  }
  function handleDelete(Id) {
    const userId = getUserUID();
    DB.collection('youtube').doc(userId).collection(Id).doc()
    .delete()
    .then(()=>{console.log('delted video', linkId)})
    .catch(e=>{console.error(e)})
  }
  /*function handleDelete(e, Id) {
    e.preventDefault()
    console.log(e.target.name)
    let index = e.target.name
    document.getElementById(index).remove()
  }*/
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
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
useEffect(() => {
  const userIdVal = getUserUID();
setUserId(userIdVal)
}, [])


  return (
    <div className="App">
      <form onSubmit={handleSubmitId}>
        <input id='input' type='text' name='input' placeholder='enter youtube video id'></input>
      </form>
      <div id="app-header">
        {
          links.map((link, index) => {
            return (<div id={index} key={index}>
              <p>userId: {userId}</p>
              <iframe id="iframeId" width="560" height="315" src={link}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowFullScreen></iframe>
              <div><input type='submit' value='delete' className='deleteButton' name={index} onClick={()=>{handleDelete({linkId})}}/></div>
            </div>)                 
          })
        }

      </div>
    </div >
  );
}

export default App;
