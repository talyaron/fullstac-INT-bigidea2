import './App.css';

function App() {
  function handleSubmitId(e) {
    e.preventDefault()
    console.log(e.target.children.input.value)
    if (e.target.children.input.value.startsWith('https://www.youtube.com/watch?v=', 0)) {
      let slicedLink = e.target.children.input.value.slice(32)
      console.log(slicedLink);
      document.getElementById('iframeId').src= "https://www.youtube.com/embed/" + slicedLink
    } if (e.target.children.input.value.startsWith('youtube.com/watch?v=', 0)) {
      let slicedLink = e.target.children.input.value.slice(20)
      console.log(slicedLink);
      document.getElementById('iframeId').src= "https://www.youtube.com/embed/" + slicedLink
    } 
    else {
      let link = "https://www.youtube.com/embed/" + e.target.children.input.value
      console.log(link)
      document.getElementById('iframeId').src= link
    }

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmitId}>
        <input id='input' type='text' name='input' placeholder='enter youtube video id'></input>
      </form>
      <div id="app-header">
        <iframe id="iframeId" width="560" height="315" src="https://www.youtube.com/embed/ZY3J3Y_OU0w"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default App;
