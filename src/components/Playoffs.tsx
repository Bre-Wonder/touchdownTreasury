import React, { useState, useEffect } from 'react';
import './Playoffs.css';

const Playoffs: React.FC = () => {
  const [daysRemaining, setDaysRemaining] = useState<number>(0);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const targetDate = new Date('2026-02-08');
      targetDate.setHours(0, 0, 0, 0); // Set to start of day
      
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to start of day
      
      const timeDifference = targetDate.getTime() - today.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
      // If the date has passed, show 0 days
      setDaysRemaining(Math.max(0, days));
    };

    // Calculate on mount
    calculateDaysRemaining();

    // Update daily at midnight
    const now = new Date();
    const msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();
    
    let intervalId: ReturnType<typeof setInterval> | null = null;
    
    const timeoutId = setTimeout(() => {
      calculateDaysRemaining();
      // Then update every 24 hours
      intervalId = setInterval(calculateDaysRemaining, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="playoffs-page">
      <div className="playoffs-container">
        <div className="playoffs-header">
          <h1>Playoffs Championship</h1>
          <p>Compete for the ultimate fantasy football championship title</p>
        </div>
        
        <div className="playoffs-content">
          <div className="playoffs-section">
            <h2>Current Playoff Bracket</h2>
            <div className="bracket-container">
              <div className="bracket-round">
                <h3>Wild Card Round</h3>
                <div className="matchup">
                  <div className="team">Team Alpha vs Team Beta</div>
                  <div className="score">24 - 18</div>
                </div>
                <div className="matchup">
                  <div className="team">Team Gamma vs Team Delta</div>
                  <div className="score">31 - 27</div>
                </div>
                <div className="matchup">
                  <div className="team">Team Echo vs Team Foxtrot</div>
                  <div className="score">19 - 22</div>
                </div>
                <div className="matchup">
                  <div className="team">Team Golf vs Team Hotel</div>
                  <div className="score">28 - 15</div>
                </div>
                <div className="matchup">
                  <div className="team">Team India vs Team Juliet</div>
                  <div className="score">TBD</div>
                </div>
                <div className="matchup">
                  <div className="team">Team Kilo vs Team Lima</div>
                  <div className="score">TBD</div>
                </div>
              </div>
              
              <div className="bracket-round">
                <h3>Divisional Round</h3>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
              </div>
              
              <div className="bracket-round">
                <h3>Conference Championship</h3>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
              </div>
              
              <div className="bracket-round championship">
                <h3>Super Bowl</h3>
                <div className="matchup">
                  <div className="team">Final Winner</div>
                  <div className="score">TBD</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="playoffs-section">
            <h2>Playoff Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Participants</h4>
                <div className="stat-number">5</div>
              </div>
              <div className="stat-card">
                <h4>Prize Pool</h4>
                <div className="stat-number">$100</div>
              </div>
              <div className="stat-card">
                <h4>Current Round</h4>
                <div className="stat-number">Wild Card</div>
              </div>
              <div className="stat-card">
                <h4>Days Remaining</h4>
                <div className="stat-number">{daysRemaining}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playoffs;
