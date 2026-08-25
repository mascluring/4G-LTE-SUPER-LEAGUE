export const DEFAULT_LEAGUE_ID = 136557;

// Contoh fungsi fetch dasar FPL
export async function getLeagueData(leagueId: number = DEFAULT_LEAGUE_ID) {
  const res = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Gagal mengambil data liga');
  return res.json();
}
