import React from 'react';
import {useState, useEffect} from "react";
import './App.css';

const App=()=> {

  const [songs, setSongs] = useState([
    {
      "title": "Worth It", 
      "artist": "Sush",
      "album": "Sush Singles",
      "track": "Worth It",
      "year": "2020",
      "img_src": "./songs_images/Worth It.jpg",
      "src": "./songs/Worth It.mp3"
    },
    {
      "title": "P.S.", 
      "artist": "Sush",
      "album": "Sush Singles",
      "track": "P.S.",
      "year": "2023",
      "img_src": "./songs_images/PS.jpg",
      "src": "./songs/PS.mp3"
    },

    //Love, Sush
    {
      "title": "Dear Sush (Intro)", 
      "artist": "Sush",
      "album": "Love, Sush",
      "track": "1",
      "year": "2022",
      "img_src": "./songs_images/Love, Sush.jpg",
      "src": "./songs/Dear Sush (Intro).mp3"
    },
    {
      "title": "I Don't Wanna Be Alone Tonight", 
      "artist": "Sush",
      "album": "Love, Sush",
      "track": "2",
      "year": "2022",
      "img_src": "./songs_images/Love, Sush.jpg",
      "src": "./songs/I Don't Wanna Be Alone Tonight.mp3"
    },
    {
      "title": "Reason ft. Lino", 
      "artist": "Sush & Lino",
      "album": "Love, Sush",
      "track": "3",
      "year": "2022",
      "img_src": "./songs_images/Love, Sush.jpg",
      "src": "./songs/Reason ft Paulo.mp3"
    },
    {
      "title": "All Alone", 
      "artist": "Sush",
      "album": "Love, Sush",
      "track": "4",
      "year": "2022",
      "img_src": "./songs_images/Love, Sush.jpg",
      "src": "./songs/All Alone.mp3"
    }
  ]);

  return (
    <div className="App">
      MusicPlayer
    </div>
  );
}

export default App;