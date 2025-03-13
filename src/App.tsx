import React, { useState } from 'react';
import './App.css';
import GoalComponent from './Goal/GoalComponent';
import AttemptComponent from './Attempt/AttemptComponent';

function App() {
  const [showAttemptCode, setShowAttemptCode] = useState(false);
  const [activeTab, setActiveTab] = useState('tsx');
  
  const handleGoalShowCode = () => {
    alert('No cheating!');
  };
  
  const handleAttemptShowCode = () => {
    setShowAttemptCode(!showAttemptCode);
  };
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React UI Component Training</h1>
        <p>Try to recreate the component on the left in your attempt on the right</p>
      </header>
      
      <main className="components-container">
        <section className="component-section goal-section">
          <div className="section-header">
            <h2>Goal Component</h2>
            <button className="show-code-button" onClick={handleGoalShowCode}>Show code</button>
          </div>
          <div className="component-display">
            <GoalComponent />
          </div>
        </section>
        
        <section className="component-section attempt-section">
          <div className="section-header">
            <h2>Your Attempt</h2>
            <button className="show-code-button" onClick={handleAttemptShowCode}>
              {showAttemptCode ? 'Show component' : 'Show code'}
            </button>
          </div>
          
          {showAttemptCode ? (
            <div className="code-display">
              <div className="code-tabs">
                <button 
                  className={`tab-button ${activeTab === 'tsx' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tsx')}
                >
                  AttemptComponent.tsx
                </button>
                <button 
                  className={`tab-button ${activeTab === 'css' ? 'active' : ''}`}
                  onClick={() => setActiveTab('css')}
                >
                  AttemptComponent.css
                </button>
              </div>
              <pre className="code-content">
                {activeTab === 'tsx' ? (
                  `import React from 'react';
import './AttemptComponent.css';

const AttemptComponent: React.FC = () => {
  return (
    <div className="attempt-card">
      <div className="attempt-header">
        <h3>Placeholder Component</h3>
      </div>
      <div className="attempt-body">
        <p>This is a basic placeholder component.</p>
        <p>Try to recreate the component from the left side!</p>
      </div>
      <div className="attempt-footer">
        <button className="attempt-button">Click Me</button>
      </div>
    </div>
  );
};

export default AttemptComponent;`
                ) : (
                  `.attempt-card {
  width: 320px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.attempt-header {
  padding: 15px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
}

.attempt-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.attempt-body {
  padding: 20px;
}

.attempt-body p {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.attempt-footer {
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
}

.attempt-button {
  background-color: #e63757;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.attempt-button:hover {
  background-color: #d32f2f;
}`
                )}
              </pre>
            </div>
          ) : (
            <div className="component-display">
              <AttemptComponent />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;