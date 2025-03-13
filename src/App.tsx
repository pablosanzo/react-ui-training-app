import React from 'react';
import './App.css';
import GoalComponent from './Goal/GoalComponent';
import AttemptComponent from './Attempt/AttemptComponent';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React UI Component Training</h1>
        <p>Try to recreate the component on the left in your attempt on the right</p>
      </header>
      
      <main className="components-container">
        <section className="component-section goal-section">
          <h2>Goal Component</h2>
          <div className="component-display">
            <GoalComponent />
          </div>
        </section>
        
        <section className="component-section attempt-section">
          <h2>Your Attempt</h2>
          <div className="component-display">
            <AttemptComponent />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;