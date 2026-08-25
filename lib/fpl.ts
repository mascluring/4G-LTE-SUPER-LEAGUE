export const LEAGUE_ID = Number(process.env.NEXT_PUBLIC_LEAGUE_ID) || 136557;
export const FPL_LEAGUE_URL = `https://fantasy.premierleague.com/api/leagues-classic/${LEAGUE_ID}/standings/`;

const FPL_BASE_URL = 'https://fantasy.premierleague.com/api';

const fetchOptions: RequestInit = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
  next: { revalidate: 60 },
};

export async function getBootstrap() {
  const res = await fetch(`${FPL_BASE_URL}/bootstrap-static/`, fetchOptions);
  if (!res.ok) throw new Error('Failed to fetch bootstrap static data');
  return res.json();
}

export async function getLeague(leagueId: number = LEAGUE_ID, page: number = 1) {
  const res = await fetch(`${FPL_BASE_URL}/leagues-classic/${leagueId}/standings/?page_new_entries=1&page_standings=${page}`, fetchOptions);
  if (!res.ok) throw new Error(`Failed to fetch league ${leagueId}`);
  return res.json();
}

export async function getAllLeagueStandings(leagueId: number = LEAGUE_ID) {
  let page = 1;
  let hasNext = true;
  let allResults: any[] = [];
  let leagueInfo: any = null;

  while (hasNext && page <= 10) {
    const data = await getLeague(leagueId, page);
    if (!leagueInfo) leagueInfo = data.league;
    
    const results = data.standings?.results || [];
    allResults = [...allResults, ...results];
    hasNext = data.standings?.has_next || false;
    page++;
  }

  return {
    league: leagueInfo,
    standings: {
      results: allResults,
    },
  };
}

export async function getEntry(entryId: number) {
  const res = await fetch(`${FPL_BASE_URL}/entry/${entryId}/`, fetchOptions);
  if (!res.ok) throw new Error(`Failed to fetch entry ${entryId}`);
  return res.json();
}

export async function getEntryHistory(entryId: number) {
  const res = await fetch(`${FPL_BASE_URL}/entry/${entryId}/history/`, fetchOptions);
  if (!res.ok) throw new Error(`Failed to fetch history for entry ${entryId}`);
  return res.json();
}

export async function getEntryPicks(entryId: number, eventId: number) {
  const res = await fetch(`${FPL_BASE_URL}/entry/${entryId}/event/${eventId}/picks/`, fetchOptions);
  if (!res.ok) throw new Error(`Failed to fetch picks for entry ${entryId} event ${eventId}`);
  return res.json();
}

export async function getLiveEvent(eventId: number) {
  const res = await fetch(`${FPL_BASE_URL}/event/${eventId}/live/`, fetchOptions);
  if (!res.ok) throw new Error(`Failed to fetch live data for event ${eventId}`);
  return res.json();
}
