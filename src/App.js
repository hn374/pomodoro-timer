import React from 'react';
import './App.css';
import Timer from './Timer.js';

function App() {
  return (
    <div className="App">
        <div className="App-Container">
            <center>
                <h1 className="Header">Pomodoro Timer</h1>
                <div className="Container">
                    <Timer />
                </div>
            </center>
        </div>
    </div>
  );
}

export default App;
