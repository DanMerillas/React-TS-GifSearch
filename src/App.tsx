//import { stat } from 'fs';
import React, { useState, useEffect } from 'react';
import './App.css';

const GIFTS = ['https://media4.giphy.com/media/jG8MGvlv2SjYhEa32n/giphy.gif?cid=ecf05e47kri21nnh2szb84i8dtm8w6ogmmdtqdl5f5rbrstz&rid=giphy.gif&ct=g', 'https://media4.giphy.com/media/MGdfeiKtEiEPS/giphy.gif?cid=ecf05e47xse7usu8qtv0sfructdt85zhb0a2qdh4rzkfjdkj&rid=giphy.gif&ct=g']

const DIFERENT_GIF =['https://media4.giphy.com/media/fQGBjfGl29jY3jTx0J/giphy.gif?cid=ecf05e47v4f0fkp6yft9p0ec9eo34n32ktvlld45eoajvktd&rid=giphy.gif&ct=g'];

function App() {
  const [gifs, setGifs] = useState(GIFTS)

  useEffect(function(){
    console.log('incializa');
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img alt="" src={singleGif} />)
        }
        <button onClick={()=>setGifs(DIFERENT_GIF)}>Cambiar gif2</button>
      </section>
    </div>
  );
}

export default App;
