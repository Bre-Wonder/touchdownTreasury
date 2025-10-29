import React from 'react';
import './TeamsModal.css';

interface Team {
  id: number;
  name: string;
  position: string;
  points: number;
  record: string;
  status: 'Active' | 'Injured' | 'Bench';
}

interface TeamsModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerName: string;
}

const TeamsModal: React.FC<TeamsModalProps> = ({ isOpen, onClose, playerName }) => {
  // Sample team data - in a real app this would come from props or API
  const teams: Team[] = [
    {
      id: 1,
      name: 'Josh Allen',
      position: 'QB',
      points: 24.5,
      record: '3-1',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Christian McCaffrey',
      position: 'RB',
      points: 18.2,
      record: '4-0',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Cooper Kupp',
      position: 'WR',
      points: 15.8,
      record: '2-2',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Travis Kelce',
      position: 'TE',
      points: 12.3,
      record: '3-1',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Davante Adams',
      position: 'WR',
      points: 16.7,
      record: '1-3',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Saquon Barkley',
      position: 'RB',
      points: 19.4,
      record: '4-0',
      status: 'Active'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="teams-modal-overlay" onClick={onClose}>
      <div className="teams-modal" onClick={(e) => e.stopPropagation()}>
        <div className="teams-modal-header">
          <h2>{playerName}'s Team</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="teams-modal-content">
          <div className="team-stats-summary">
            <div className="stat-item">
              <span className="stat-label">Total Points</span>
              <span className="stat-value">106.9</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Team Record</span>
              <span className="stat-value">17-7</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">League Rank</span>
              <span className="stat-value">#3</span>
            </div>
          </div>

          <div className="teams-grid">
            {teams.map((team) => (
              <div key={team.id} className="team-card">
                <div className="team-header">
                  <h4 className="team-name">{team.name}</h4>
                  <span className={`team-status ${team.status.toLowerCase()}`}>
                    {team.status}
                  </span>
                </div>
                <div className="team-info">
                  <div className="team-position">
                    <span className="position-label">Position</span>
                    <span className="position-value">{team.position}</span>
                  </div>
                  <div className="team-points">
                    <span className="points-label">Points</span>
                    <span className="points-value">{team.points}</span>
                  </div>
                  <div className="team-record">
                    <span className="record-label">Record</span>
                    <span className="record-value">{team.record}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsModal;


