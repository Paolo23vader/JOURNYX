
import React from 'react';
import { ArrowRight, TrendingUp, Sparkles, Clock, Crown, ChevronRight } from 'lucide-react';
import { MOCK_GAMES, MOCK_REVIEWS, WAITED_2026_GAMES } from '../mockData';
import GameCard from '../components/GameCard';
import ReviewCard from '../components/ReviewCard';
import { ViewType } from '../types';

interface HomeViewProps {
  onSelectGame: (id: string) => void;
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onSelectGame, onNavigate }) => {
  // Take exactly 9 for 3x3 grids
  const popularGames = MOCK_GAMES.slice(0, 9);
  const waitedGames = WAITED_2026_GAMES.slice(0, 9);
  
  // Specific GOTY candidates for 3x1 grid
  const gotyGames = [
    MOCK_GAMES.find(g => g.id === 'p1'), // Wukong
    MOCK_GAMES.find(g => g.id === 'p3'), // FFVII
    MOCK_GAMES.find(g => g.id === 'p8')  // Astro Bot
  ].filter(Boolean) as any[];

  // Exactly 4 reviews
  const recentReviews = MOCK_REVIEWS.slice(0, 4);

  return (
    <div className="p-6 pb-12 bg-[#0a0612] min-h-screen font-['Goldman']">
      <header className="flex flex-col items-center mb-12 relative">
        <div className="text-center pt-2">
          <h1 className="text-6xl font-black text-white tracking-tighter uppercase leading-none">
            JOURNY<span className="text-purple-600">X</span>
          </h1>
          <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-3">
            Your personal gaming diary
          </p>
        </div>
      </header>

      {/* MOST POPULAR GAMES RIGHT NOW (3x3 Grid) */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-500" />
            <h2 className="text-lg font-bold text-white tracking-tight uppercase">MOST POPULAR GAMES RIGHT NOW</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          {popularGames.map(game => (
            <GameCard key={game.id} game={game} onClick={onSelectGame} minimal={true} />
          ))}
        </div>

        <button 
          onClick={() => onNavigate('search')}
          className="flex items-center justify-center gap-3 w-full py-4 border-2 border-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 active:scale-95 transition-all group"
        >
          VIEW MORE 
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* MOST WAITED GAMES FOR 2026 (3x3 Grid) */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-purple-500" />
            <h2 className="text-lg font-bold text-white tracking-tight uppercase">MOST WAITED GAMES FOR 2026</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          {waitedGames.map(game => (
            <GameCard key={game.id} game={game} onClick={onSelectGame} minimal={true} />
          ))}
        </div>

        <button 
          onClick={() => onNavigate('search')}
          className="flex items-center justify-center gap-3 w-full py-4 border-2 border-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 active:scale-95 transition-all group"
        >
          VIEW MORE 
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* GAMES OF THE YEAR (3x1 Grid) */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Crown size={20} className="text-yellow-500" />
          <h2 className="text-lg font-bold text-white tracking-tight uppercase">GAMES OF THE YEAR</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {gotyGames.map((game, index) => (
            <div key={game.id} className="relative group cursor-pointer" onClick={() => onSelectGame(game.id)}>
              <div className="aspect-[3/4] overflow-hidden border-2 border-yellow-600/30 bg-slate-900">
                <img src={game.coverUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={game.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[10px] font-bold text-yellow-500">#{index + 1} GOTY</span>
                </div>
              </div>
              <h4 className="mt-2 text-[10px] font-bold text-white truncate uppercase">{game.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT GLOBAL REVIEWS (4 Reviews) */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <Clock size={20} className="text-purple-500" />
          <h2 className="text-lg font-bold text-white tracking-tight uppercase">RECENT GLOBAL REVIEWS</h2>
        </div>
        
        <div className="space-y-4">
          {recentReviews.map(review => (
            <ReviewCard key={review.id} review={review} onGameClick={onSelectGame} />
          ))}
        </div>
        
        <button 
          onClick={() => onNavigate('notifications')}
          className="mt-6 flex items-center justify-center gap-3 w-full py-4 border border-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-purple-400 active:scale-95 transition-all"
        >
          VIEW ALL ACTIVITY 
          <ArrowRight size={14} />
        </button>
      </section>
    </div>
  );
};

export default HomeView;
