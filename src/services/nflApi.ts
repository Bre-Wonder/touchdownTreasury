// Simple NFL API service using TheSportsDB demo key (free)
// Docs: https://www.thesportsdb.com/api.php

export interface NflEvent {
  idEvent?: string;
  dateEvent?: string;
  strHomeTeam?: string;
  strAwayTeam?: string;
  intHomeScore?: string | number | null;
  intAwayScore?: string | number | null;
  strStatus?: string | null;
}

export interface TeamRecord {
  wins: number;
  losses: number;
  ties: number;
}

const DEMO_API_KEY = '1';
const NFL_LEAGUE_ID = '4391'; // NFL on TheSportsDB

export async function fetchSeasonEvents(season: string): Promise<NflEvent[]> {
  const url = `https://www.thesportsdb.com/api/v1/json/${DEMO_API_KEY}/eventsseason.php?id=${NFL_LEAGUE_ID}&s=${encodeURIComponent(
    season
  )}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch season events: ${res.status}`);
  }
  const data = await res.json();
  return (data?.events as NflEvent[]) || [];
}

export function computeTeamRecords(events: NflEvent[]): Record<string, TeamRecord> {
  const records: Record<string, TeamRecord> = {};

  const ensure = (team: string | undefined) => {
    if (!team) return;
    if (!records[team]) {
      records[team] = { wins: 0, losses: 0, ties: 0 };
    }
  };

  for (const e of events) {
    const homeTeam = e.strHomeTeam ?? '';
    const awayTeam = e.strAwayTeam ?? '';
    const homeScore = e.intHomeScore === null || e.intHomeScore === undefined ? null : Number(e.intHomeScore);
    const awayScore = e.intAwayScore === null || e.intAwayScore === undefined ? null : Number(e.intAwayScore);

    // Skip games without final scores
    if (
      !homeTeam ||
      !awayTeam ||
      homeScore === null ||
      awayScore === null ||
      Number.isNaN(homeScore) ||
      Number.isNaN(awayScore)
    ) {
      continue;
    }

    ensure(homeTeam);
    ensure(awayTeam);

    if (homeScore > awayScore) {
      records[homeTeam].wins += 1;
      records[awayTeam].losses += 1;
    } else if (awayScore > homeScore) {
      records[awayTeam].wins += 1;
      records[homeTeam].losses += 1;
    } else {
      // tie
      records[homeTeam].ties += 1;
      records[awayTeam].ties += 1;
    }
  }

  return records;
}

export function normalizeTeamNameForMatching(name: string): string {
  // Convert common variations to TheSportsDB team names
  // TheSportsDB uses full team names like "Buffalo Bills", "Detroit Lions", etc.
  const n = name.trim();
  if (!n) return n;
  const lower = n.toLowerCase();

  const aliases: Record<string, string> = {
    // NFC Teams
    'bills': 'Buffalo Bills',
    'lions': 'Detroit Lions',
    'packers': 'Green Bay Packers',
    'commanders': 'Washington Commanders',
    'steelers': 'Pittsburgh Steelers',
    'seahawks': 'Seattle Seahawks',
    'colts': 'Indianapolis Colts',
    'saints': 'New Orleans Saints',
    'jets': 'New York Jets',
    'rams': 'Los Angeles Rams',
    'cardinals': 'Arizona Cardinals',
    'dolphins': 'Miami Dolphins',
    'vikings': 'Minnesota Vikings',
    'ravens': 'Baltimore Ravens',
    'buccaneers': 'Tampa Bay Buccaneers',
    'bucs': 'Tampa Bay Buccaneers',
    'patriots': 'New England Patriots',
    'pats': 'New England Patriots',
    'jaguars': 'Jacksonville Jaguars',
    'bears': 'Chicago Bears',
    'giants': 'New York Giants',
    'eagles': 'Philadelphia Eagles',
    '49ers': 'San Francisco 49ers',
    'broncos': 'Denver Broncos',
    'falcons': 'Atlanta Falcons',
    'raiders': 'Las Vegas Raiders',
    'titans': 'Tennessee Titans',
    'browns': 'Cleveland Browns',
    'chiefs': 'Kansas City Chiefs',
    'cheifs': 'Kansas City Chiefs',
    'chargers': 'Los Angeles Chargers',
    'cowboys': 'Dallas Cowboys',
    'panthers': 'Carolina Panthers',
    'bengals': 'Cincinnati Bengals',
    'texans': 'Houston Texans',
    'washington': 'Washington Commanders',
  };

  if (aliases[lower]) return aliases[lower];
  // If no alias found, return as-is (might already be correct format)
  return n;
}


