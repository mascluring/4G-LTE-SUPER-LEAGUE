import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'ERA SUPER LEAGUE — FPL Dashboard',
  description: 'Fantasy Premier League Manager & Analytics',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        {/* Header FPL: Ungu FPL dengan Garis Hijau Mint dan Badge Merah */}
        <header className="bg-[#37003c] text-white border-b-4 border-[#00ff87] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-[#e90052] animate-pulse"></span>
              <h1 className="text-xl font-bold tracking-tight">
                ERA SUPER LEAGUE <span className="text-[#00ff87]">#136557</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#e90052] text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                LIVE FPL
              </span>
            </div>
          </div>
        </header>

        {/* Sub-bar Hijau Lapangan FPL */}
        <div className="bg-[#028940] text-white py-2 px-4 shadow-inner text-xs font-semibold">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>Official League ID: 136557</span>
            <span className="text-[#00ff87]">Season 2025/2026</span>
          </div>
        </div>

        {/* Konten Utama */}
        <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#37003c] border-t-2 border-[#e90052] text-white text-center py-4 text-sm font-medium">
          FPL Analytics &copy; 2026 — League ID: <span className="text-[#00ff87]">136557</span>
        </footer>
      </body>
    </html>
  );
}
