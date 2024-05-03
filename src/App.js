import React, { Profiler } from 'react'
import './App.css';
import RandomIcons from './components/RandomIcons';

function App() {
  return (
    <div className="App">
      <Profiler id="random-icon-profiler" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
        console.log({
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
          interactions
        });
      }}>
        <RandomIcons />
      </Profiler>
    </div>
  );
}

export default App;
