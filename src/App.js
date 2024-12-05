import './App.css';
import React, {useEffect,useState} from 'react';
import Clickable from './Components/Clickable/Clickable';
import Displayer from './Components/Displayer/Displayer';



function App() {
  const [currentUrl, setCurrentUrl] = useState(null)
  const [play, setPlay] = useState(0)
  const music = {
    Q: ["Heater 1","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"],
    W: ["Heater 2", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"],
    E: ["Heater 3","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"],
    A: ["Heater 4","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"],
    S: ["Clap","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"],
    D: ["Open HH","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"],
    Z: ["Kick n' Hat","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"],
    X: ["Kick","https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"],
    C: ["Close HH","https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"]
  }
  const handleChange = (key) =>{
    // Change the url
    setCurrentUrl(music[key])
    setPlay(play + 1)
  }

  return (
    <div id="drum-machine">
      <Displayer   musicUrl={currentUrl} play={play}/>
      <Clickable keyPressed={handleChange}/>
    </div>
  );
}

export default App;
