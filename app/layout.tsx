import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'FPL League Dashboard',
  description: 'Fantasy Premier League Manager & Analytics',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        {/* Header khas FPL */}
        <header className="bg-[#37003c] text-white border-b-4 border-[#00ff87] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-[#e90052] animate-pulse"></span>
              <h1 className="text-xl font-bold tracking-tight">
                FPL League <span className="text-[#00ff87]">#136557</span>
              </h1>
            </div>
            <span className="bg-[#e90052] text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              Live Standings
            </span>
          </div>
        </header>

        {/* Konten Utama */}
        <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#028940] text-white text-center py-4 text-sm font-medium">
          FPL Analytics &copy; 2026 - League ID: 136557
        </footer>
      </body>
    </html>
  );
}
