import React from 'react';
import './ProductGrid.css';

interface Team {
  id: number;
  name: string;
  wins: number;
  losses: number;
}

interface Player {
  id: number;
  name: string;
  points: number;
  teams: Team[];
}

const ProductGrid: React.FC = () => {
  const players: Player[] = [
    {
      id: 1,
      name: 'Mark - The Commissioner',
      points: 24.5,
      teams: [
        { id: 1, name: 'Buffalo Bills', wins: 10, losses: 1 },
        { id: 2, name: 'Kansas City Chiefs', wins: 4, losses: 0 },
        { id: 3, name: 'Tampa Bay Buccaneers', wins: 2, losses: 2 },
        { id: 4, name: 'Green Bay Packers', wins: 3, losses: 1 },
        { id: 5, name: 'Los Angeles Rams', wins: 4, losses: 0 },
        { id: 6, name: 'Dallas Cowboys', wins: 2, losses: 2 },
        { id: 7, name: 'San Francisco 49ers', wins: 3, losses: 1 }
      ]
    },
    {
      id: 2,
      name: 'Jerald - The Head Coach',
      points: 18.2,
      teams: [
        { id: 1, name: 'Buffalo Bills', wins: 15, losses: 1 },
        { id: 2, name: 'Kansas City Chiefs', wins: 4, losses: 0 },
        { id: 3, name: 'Tampa Bay Buccaneers', wins: 2, losses: 2 },
        { id: 4, name: 'Green Bay Packers', wins: 3, losses: 1 },
        { id: 5, name: 'Los Angeles Rams', wins: 4, losses: 0 },
        { id: 6, name: 'Dallas Cowboys', wins: 2, losses: 2 },
        { id: 7, name: 'San Francisco 49ers', wins: 3, losses: 1 }
      ]
    },
    {
      id: 3,
      name: 'David - The Mascot "Go Beavs"',
      points: 15.8,
      teams: [
        { id: 1, name: 'Buffalo Bills', wins: 8, losses: 1 },
        { id: 2, name: 'Kansas City Chiefs', wins: 4, losses: 0 },
        { id: 3, name: 'Tampa Bay Buccaneers', wins: 2, losses: 2 },
        { id: 4, name: 'Green Bay Packers', wins: 3, losses: 1 },
        { id: 5, name: 'Los Angeles Rams', wins: 4, losses: 0 },
        { id: 6, name: 'Dallas Cowboys', wins: 2, losses: 2 },
        { id: 7, name: 'San Francisco 49ers', wins: 3, losses: 1 }
      ]
    },
    {
      id: 4,
      name: 'Rich - The MVP',
      points: 12.3,
      teams: [
        { id: 1, name: 'Buffalo Bills', wins: 7, losses: 1 },
        { id: 2, name: 'Kansas City Chiefs', wins: 4, losses: 0 },
        { id: 3, name: 'Tampa Bay Buccaneers', wins: 2, losses: 2 },
        { id: 4, name: 'Green Bay Packers', wins: 3, losses: 1 },
        { id: 5, name: 'Los Angeles Rams', wins: 4, losses: 0 },
        { id: 6, name: 'Dallas Cowboys', wins: 2, losses: 2 },
        { id: 7, name: 'San Francisco 49ers', wins: 3, losses: 1 }
      ]
    },
    {
      id: 5,
      name: 'Eric - The Half Time Show',
      points: 16.7,
      teams: [
        { id: 1, name: 'Buffalo Bills', wins: 65, losses: 1 },
        { id: 2, name: 'Kansas City Chiefs', wins: 4, losses: 0 },
        { id: 3, name: 'Tampa Bay Buccaneers', wins: 2, losses: 2 },
        { id: 4, name: 'Green Bay Packers', wins: 3, losses: 1 },
        { id: 5, name: 'Los Angeles Rams', wins: 4, losses: 0 },
        { id: 6, name: 'Dallas Cowboys', wins: 2, losses: 2 },
        { id: 7, name: 'San Francisco 49ers', wins: 3, losses: 1 }
      ]
    },
  ];

  const calculateRecord = (teams: Team[]) => {
    const totalWins = teams.reduce((sum, team) => sum + team.wins, 0);
    const totalLosses = teams.reduce((sum, team) => sum + team.losses, 0);
    return `${totalWins}-${totalLosses}`;
  };

  const sortedPlayers = [...players].sort((a, b) => {
    const aTotalWins = a.teams.reduce((sum, team) => sum + team.wins, 0);
    const aTotalLosses = a.teams.reduce((sum, team) => sum + team.losses, 0);
    const bTotalWins = b.teams.reduce((sum, team) => sum + team.wins, 0);
    const bTotalLosses = b.teams.reduce((sum, team) => sum + team.losses, 0);

    // Sort by wins (descending)
    if (bTotalWins !== aTotalWins) {
      return bTotalWins - aTotalWins;
    }
    // If wins are equal, sort by losses (ascending - fewer losses first)
    return aTotalLosses - bTotalLosses;
  });

  return (
    <section className="product-section" id="products">
      <div className="product-container">
        <div className="section-header">
          <h2>Roster</h2>
          <p>Current Active Players</p>
        </div>

        <div className="product-grid">
          {sortedPlayers.map((player, index) => (
            <div key={player.id} className="product-card">
              <div className="player-header">
                <h4 className="player-name">{player.name}</h4>
              </div>
              <div className="player-info">
                <div className="player-points">
                  <span className="points-label">Rank</span>
                  <span className="points-value">#{index + 1}</span>
                </div>
                <div className="player-record">
                  <span className="record-label">Record</span>
                  <span className="record-value">{calculateRecord(player.teams)}</span>
                </div>
              </div>
              <div className="teams-table">
                <table>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>W</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {player.teams.map((team) => (
                      <tr key={team.id}>
                        <td>{team.name}</td>
                        <td>{team.wins}</td>
                        <td>{team.losses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

