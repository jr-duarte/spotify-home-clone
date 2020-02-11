import React from 'react';
import './App.css';


import './global.css'

import Menu from "./components/Menu"
import Music from "./components/Music"

import back from "../src/assets/back.png" 
import forward from "../src/assets/forward.png"
import down from "../src/assets/down-arrow.png"  


function App() {
  return (
    <div id="app">

      <aside>
        <Menu/>
      </aside>


      <main>
        <header>

        <div className="start">
        <a href="#">
        <img src={back} alt="Go Back" />
        </a>
        <a href="#">
        <img src={forward} alt="Go Forward" />
        </a>
        </div>

        <a href="#" className="end">
        <img src='https://avatars1.githubusercontent.com/u/32375670?s=460&v=4' alt='avatar' />
        <p>Junior Duarte</p>
        <img className="down" src={down} alt="down" />
        </a>
        </header>
        
      <Music/>

      </main>
      
    </div>
  );
}

export default App;
