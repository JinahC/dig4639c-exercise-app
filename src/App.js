import './App.css';
import pushupImg from './images/pushup.png';
import runningImg from './images/running.png';
import plankImg from './images/plank.png';

import { useState } from 'react';
import MainMenu from './components/MainMenu';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

function App() {
  const [menuActive, setMenuActive] = useState(true);
  const [pushupsActive, setPushupsActive] = useState(false);
  const [runningActive, setRunningActive] = useState(false);
  const [planksActive, setPlanksActive] = useState(false);

  function activateMenu() {
    setMenuActive(true);
    setPushupsActive(false);
    setRunningActive(false);
    setPlanksActive(false);
  }

  function activatePushups() {
    setMenuActive(false);
    setPushupsActive(true);
  }

  function activateRunning() {
    setMenuActive(false);
    setRunningActive(true);
  }

  function activatePlanks() {
    setMenuActive(false);
    setPlanksActive(true);
  }

  return (
    <>
      {menuActive && 
        <MainMenu 
          activatePushups={activatePushups}
          activateRunning={activateRunning}
          activatePlanks={activatePlanks}
          pushupImg={pushupImg}
          runningImg={runningImg}
          plankImg={plankImg}
        />}

      {pushupsActive && 
        <RepetitionExercise 
          name="pushups"
          exerciseImg={pushupImg}
          returnToMenu={activateMenu}
        />}

      {runningActive && 
        <DurationExercise 
          name="running"
          exerciseImg={runningImg}
          returnToMenu={activateMenu}
        />}

      {planksActive && 
        <RepetitionExercise 
          name="planks"
          exerciseImg={plankImg}
          returnToMenu={activateMenu}
        />}
    </>
  );
}

export default App;
