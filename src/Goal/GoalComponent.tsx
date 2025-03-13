import React, { useState } from 'react';
import './GoalComponent.css';

const GoalComponent: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);
  
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-placeholder">
          <span>📷</span>
        </div>
        <div className="card-badge">Featured</div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">Beautiful Component</h3>
        <p className="card-description">
          This is an example of a well-designed card component with various interactive elements.
          Try to recreate this in your attempt!
        </p>
        
        <div className="card-meta">
          <span className="card-date">April 15, 2023</span>
          <span className="card-author">by Designer</span>
        </div>
        
        <div className="card-actions">
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={`star ${rating >= star ? 'active' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          
          <button 
            className={`like-button ${isLiked ? 'liked' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalComponent;