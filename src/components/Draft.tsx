import React from 'react';
import './Draft.css';

const Draft: React.FC = () => {
  return (
    <div className="draft-page">
      <div className="draft-container">
        <div className="draft-header">
          <h1>Draft Central</h1>
          <p>Join the ultimate fantasy football draft experience</p>
        </div>
        
        <div className="draft-content">
          <div className="draft-section">
            <h2>Upcoming Drafts</h2>
            <div className="draft-cards">
              <div className="draft-card">
                <h3>Season Kickoff Draft</h3>
                <p>September 1st, 2024</p>
                <p>8:00 PM EST</p>
                <button className="join-draft-btn">Join Draft</button>
              </div>
              <div className="draft-card">
                <h3>Weekly Mini Draft</h3>
                <p>Every Sunday</p>
                <p>12:00 PM EST</p>
                <button className="join-draft-btn">Join Draft</button>
              </div>
              <div className="draft-card">
                <h3>Championship Draft</h3>
                <p>December 15th, 2024</p>
                <p>7:00 PM EST</p>
                <button className="join-draft-btn">Join Draft</button>
              </div>
            </div>
          </div>
          
          <div className="draft-section">
            <h2>Draft Rules & Format</h2>
            <div className="rules-grid">
              <div className="rule-item">
                <h4>Snake Draft</h4>
                <p>Traditional snake draft format with 12 teams</p>
              </div>
              <div className="rule-item">
                <h4>Standard Scoring</h4>
                <p>PPR scoring with standard fantasy positions</p>
              </div>
              <div className="rule-item">
                <h4>Draft Time</h4>
                <p>90 seconds per pick with 2-minute breaks every 3 rounds</p>
              </div>
              <div className="rule-item">
                <h4>Entry Fee</h4>
                <p>$10 entry with winner-take-all prize structure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
