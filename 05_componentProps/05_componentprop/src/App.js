import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
    </div>
  );
}

export default App;
