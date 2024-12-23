import React from 'react';
import Counter from './components/Counter';
import SessionForm from './components/SessionForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MERN Stack Local & Session Storage Example</h1>
      <div className="counter-container">
        <Counter />
      </div>
      <SessionForm />
    </div>
  );
}

export default App;
