import React, { useEffect, useState } from 'react';
import './ProductGrid.css';
import { computeTeamRecords, fetchSeasonEvents, normalizeTeamNameForMatching } from '../services/nflApi';

interface Team {
  id: number;
  name: string;
  wins: number;
  losses: number;
  ties: number;
}

interface Player {
  id: number;
  name: string;
  teams: Team[];
}

const ProductGrid: React.FC = () => {
  const [, setSeasonRecordsLoaded] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const getTeamImageSrc = (teamName: string) => {
    const parts = teamName.trim().split(' ');
    const nickname = parts[parts.length - 1].toLowerCase();
    return `/images/${nickname}.png`;
  };

  const [players, setPlayers] = useState<Player[]>([
    {
      id: 1,
      name: 'Mark - The Commissioner',
      teams: [
        { id: 1, name: 'Bills', wins: 5, losses: 5, ties: 0},
        { id: 2, name: 'Lions', wins: 5, losses: 2, ties: 0 },
        { id: 3, name: 'Chargers', wins: 5, losses: 3, ties: 0 },
        { id: 4, name: 'Bengals', wins: 3, losses: 5, ties: 0 },
        { id: 5, name: 'Cowboys', wins: 3, losses: 4, ties: 1 },
        { id: 6, name: 'Panthers', wins: 4, losses: 4, ties: 0 },
        { id: 7, name: '', wins: 0, losses: 0, ties: 0 }
      ]
    },
    {
      id: 2,
      name: 'Jerald - The Head Coach',
      teams: [
        { id: 1, name: 'Packers', wins: 5, losses: 1, ties: 1},
        { id: 2, name: 'Commanders', wins: 3, losses: 5, ties: 0 },
        { id: 3, name: 'Steelers', wins: 4, losses: 3, ties: 0 },
        { id: 4, name: 'Seahawks', wins: 5, losses: 2, ties: 0 },
        { id: 5, name: 'Colts', wins: 7, losses: 1, ties: 0 },
        { id: 6, name: 'Saints', wins: 1, losses: 7, ties: 0 },
        { id: 7, name: 'Jets', wins: 1, losses: 7, ties: 0 },
      ]
    },
    {
      id: 3,
      name: 'David - The Mascot',
      teams: [
        { id: 1, name: 'Chiefs', wins: 5, losses: 3, ties: 0 },
        { id: 2, name: 'Rams', wins: 5, losses: 2, ties: 0 },
        { id: 3, name: 'Texans', wins: 3, losses: 4, ties: 0 },
        { id: 4, name: 'Vikings', wins: 3, losses: 4, ties: 0 },
        { id: 5, name: 'Cardinals', wins: 2, losses: 5, ties: 0 },
        { id: 6, name: 'Dolphins', wins: 2, losses: 6, ties: 0 },
        { id: 7, name: '', wins: 0, losses: 0, ties: 0 }
      ]
    },
    {
      id: 4,
      name: 'Rich -  The Referee',
      teams: [
        { id: 1, name: 'Ravens', wins: 2, losses: 5, ties: 0 },
        { id: 2, name: 'Buccaneers', wins: 6, losses: 2, ties: 0 },
        { id: 3, name: 'Patriots', wins: 6, losses: 2, ties: 0 },
        { id: 4, name: 'Jaguars', wins: 4, losses: 3, ties: 0 },
        { id: 5, name: 'Bears', wins: 4, losses: 3, ties: 0 },
        { id: 6, name: 'Giants', wins: 2, losses: 6, ties: 0 },
        { id: 7, name: '', wins: 0, losses: 0, ties: 0 }
      ]
    },
    {
      id: 5,
      name: 'Eric - The Half Time Show',
      teams: [
        { id: 1, name: 'Eagles', wins: 6, losses: 2, ties: 0 },
        { id: 2, name: '49ers', wins: 5, losses: 3, ties: 0 },
        { id: 3, name: 'Broncos', wins: 6, losses: 2, ties: 0 },
        { id: 4, name: 'Falcons', wins: 3, losses: 4, ties: 0 },
        { id: 5, name: 'Raiders', wins: 2, losses: 5, ties: 0 },
        { id: 6, name: 'Titans', wins: 1, losses: 7, ties: 0 },
        { id: 7, name: 'Browns', wins: 2, losses: 6, ties: 0 }
      ]
    },
  ]);

  const refreshScores = async () => {
    setIsRefreshing(true);
    try {
      // Fetch events for the 2025-2026 NFL season
      const events = await fetchSeasonEvents('2025');
      const records = computeTeamRecords(events);

      setPlayers((prev) =>
        prev.map((p) => ({
          ...p,
          teams: p.teams.map((t) => {
            const matchKey = normalizeTeamNameForMatching(t.name);
            const rec = records[matchKey];
            if (!rec || !t.name.trim()) {
              return t; // keep existing if no record or empty name
            }
            return { ...t, wins: rec.wins, losses: rec.losses, ties: rec.ties };
          }),
        }))
      );
      setSeasonRecordsLoaded(true);
    } catch (e) {
      // Fail silently; keep manual data
      setSeasonRecordsLoaded(true);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        // Fetch events for the 2025-2026 NFL season
        const events = await fetchSeasonEvents('2025');
        const records = computeTeamRecords(events);

        if (cancelled) return;

        setPlayers((prev) =>
          prev.map((p) => ({
            ...p,
            teams: p.teams.map((t) => {
              const matchKey = normalizeTeamNameForMatching(t.name);
              const rec = records[matchKey];
              if (!rec || !t.name.trim()) {
                return t; // keep existing if no record or empty name
              }
              return { ...t, wins: rec.wins, losses: rec.losses, ties: rec.ties };
            }),
          }))
        );
        setSeasonRecordsLoaded(true);
      } catch (e) {
        // Fail silently; keep manual data
        setSeasonRecordsLoaded(true);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const calculateTotalWins = (teams: Team[]) => {
    return teams
      .filter(team => team.id !== 7)
      .reduce((sum, team) => sum + team.wins, 0);
  };

  const calculateTotalPoints = (teams: Team[]) => {
    return teams
      .filter(team => team.id !== 7)
      .reduce((sum, team) => sum + team.wins + team.ties * 0.5, 0);
  };

  const sortedPlayers = [...players].sort((a, b) => {
    const aPoints = calculateTotalPoints(a.teams);
    const bPoints = calculateTotalPoints(b.teams);

    if (bPoints !== aPoints) {
      return bPoints - aPoints; // higher points first
    }

    // Tie-breakers: more wins, then fewer losses
    const aWins = calculateTotalWins(a.teams);
    const bWins = calculateTotalWins(b.teams);
    if (bWins !== aWins) {
      return bWins - aWins;
    }

    const aLosses = a.teams
      .filter(team => team.id !== 7)
      .reduce((sum, team) => sum + team.losses, 0);
    const bLosses = b.teams
      .filter(team => team.id !== 7)
      .reduce((sum, team) => sum + team.losses, 0);
    return aLosses - bLosses;
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
                  <span className="record-label">Wins</span>
                  <span className="record-value">{calculateTotalWins(player.teams)}</span>
                </div>
                <div className="player-points">
                  <span className="points-label">Points</span>
                  <span className="points-value">{(() => {
                    const pts = calculateTotalPoints(player.teams);
                    return pts % 1 === 0 ? pts : pts.toFixed(1);
                  })()}</span>
                </div>
              </div>
              <div className="teams-table">
                <table>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>W</th>
                      <th>L</th>
                      <th>T</th>
                    </tr>
                  </thead>
                  <tbody>
                    {player.teams.map((team) => (
                      <tr key={team.id}>
                        <td className="team-name-cell">
                          {team.name.trim() ? (
                            <>
                              <img
                                className="team-logo"
                                src={getTeamImageSrc(team.name)}
                                alt={`${team.name} logo`}
                              />
                              <span className="team-name-text">{team.name}</span>
                            </>
                          ) : (
                            <span className="team-name-text">{team.name}</span>
                          )}
                        </td>
                        <td>{team.wins}</td>
                        <td>{team.losses}</td>
                        <td>{team.ties}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <div className="refresh-scores-container">
          <button
            className="refresh-scores-btn"
            onClick={refreshScores}
            disabled={isRefreshing}
          >
            {isRefreshing ? 'Refreshing...' : 'Refresh Scores'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

