import React from 'react';
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

export default AttemptComponent;