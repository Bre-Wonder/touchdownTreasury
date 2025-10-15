import React from 'react';
import './Playoffs.css';

const Playoffs: React.FC = () => {
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
              </div>
              
              <div className="bracket-round">
                <h3>Divisional Round</h3>
                <div className="matchup">
                  <div className="team">Team Alpha vs Team Delta</div>
                  <div className="score">TBD</div>
                </div>
                <div className="matchup">
                  <div className="team">Team Foxtrot vs Team Golf</div>
                  <div className="score">TBD</div>
                </div>
              </div>
              
              <div className="bracket-round">
                <h3>Conference Championship</h3>
                <div className="matchup">
                  <div className="team">Winner vs Winner</div>
                  <div className="score">TBD</div>
                </div>
              </div>
              
              <div className="bracket-round championship">
                <h3>Championship Game</h3>
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
                <div className="stat-number">256</div>
              </div>
              <div className="stat-card">
                <h4>Prize Pool</h4>
                <div className="stat-number">$12,800</div>
              </div>
              <div className="stat-card">
                <h4>Current Round</h4>
                <div className="stat-number">Wild Card</div>
              </div>
              <div className="stat-card">
                <h4>Days Remaining</h4>
                <div className="stat-number">14</div>
              </div>
            </div>
          </div>
          
          <div className="playoffs-section">
            <h2>Playoff Rules</h2>
            <div className="rules-list">
              <div className="rule-item">
                <h4>Single Elimination</h4>
                <p>One loss and you're out. Make every pick count!</p>
              </div>
              <div className="rule-item">
                <h4>Weekly Matchups</h4>
                <p>Each round lasts one week of NFL games</p>
              </div>
              <div className="rule-item">
                <h4>Higher Seed Advantage</h4>
                <p>Higher seeded teams get home field advantage (tiebreaker)</p>
              </div>
              <div className="rule-item">
                <h4>Prize Distribution</h4>
                <p>Winner takes 70%, Runner-up gets 20%, Semifinalists split 10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playoffs;
