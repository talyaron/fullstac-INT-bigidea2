import './Main.css';
import { useState, useEffect } from 'react';
import {useParams } from "react-router-dom";

import { DB } from './firebaseConfig';

function Main() {

    let { userId } = useParams();
    console.log(userId)

    //states
    const [vidoeUrl, setVideoUrl] = useState('HEQcQm21DlY');
    const [videos, setVideos] = useState([])

    useEffect(() => {
       
        if(!userId){
            userId= getUserUID();
            window.location.href=userId //put the user Id on the url
        }

        console.log('listen....')
        DB.collection('lists').doc(userId).collection('videos').onSnapshot(videosDB => {
            console.log('LISTENING TO ',userId)
            let tmpVideos = [];
            videosDB.forEach(videoDB => {
                tmpVideos.push(videoDB.data())
            })
            console.log()
            setVideos(tmpVideos)
        })
    }, [])

    function handleUrl(e) {
        e.preventDefault()

        let id = e.target.children.url.value;
        let newId = id

        if (id.startsWith('https://www.youtube.com/watch?v=')) {
            newId = id.slice(32, 43)

        } else if (id.startsWith('youtube.com/watch?v=')) {

            newId = id.slice(20, 31)

        }

        console.log(newId)
        setVideoUrl(newId)

        if(!userId){
            userId= getUserUID();
        }
        console.log('saving for user', userId)
        //save to DB
        DB.collection('lists').doc(userId)
            .collection('videos').doc(newId).set({ videoId: newId, date: new Date() })
            .then(() => { console.log(`Video was saved for user ${userId}, under Id ${newId}`) })
            .catch(e => console.error(e))

    }

    function deleteVideo(videoId) {

        if(!userId){
            userId= getUserUID();
        }

        DB.collection('lists').doc(userId)
            .collection('videos')
            .doc(videoId)
            .delete()
            .then(() => { console.log('deleted video', videoId) })
            .catch(e => { console.error(e) })
    }


    return (
        <div className="App">
            <form onSubmit={handleUrl} className='inputTop'>
                <input type='text' name='url' />

            </form>
            <header className="App-header">
                {
                    videos.map((video, index) => {
                        console.log(video)
                        return (
                            <div>
                                <iframe key={index} title='some video' width="560" height="315" src={`https://www.youtube.com/embed/${video.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <button onClick={() => { deleteVideo(video.videoId) }}>Delete</button>
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
