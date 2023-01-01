//import { stat } from 'fs';
import React, { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif'




function App() {
  const [gifs, setGifs] = useState<any[]>([]);

  useEffect(function () {
    getGifs('matrix').then((gifs: any) => setGifs(gifs))

  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {

          gifs.map(singleGif => {
            return <Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url} />
          }

          )
        }

      </section>
    </div>
  );
}

export default App;
