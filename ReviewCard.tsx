
import React from 'react';
import { Game } from '../types';
import { Star } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onClick: (id: string) => void;
  compact?: boolean;
  minimal?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick, compact = false, minimal = false }) => {
  if (minimal) {
    return (
      <div 
        onClick={() => onClick(game.id)}
        className="relative group cursor-pointer active:scale-95 transition-all aspect-[3/4] overflow-hidden rounded-none shadow-sm border border-slate-800"
      >
        <img 
          src={game.coverUrl} 
          alt={game.title} 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all" 
        />
        <div className="absolute top-1 right-1 bg-[#0a0612]/80 backdrop-blur px-1 py-0.5 rounded-none flex items-center gap-0.5 border border-purple-900/30">
          <Star size={8} className="fill-yellow-500 text-yellow-500" />
          <span className="text-[8px] font-black text-white">{game.rating}</span>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div 
        onClick={() => onClick(game.id)}
        className="flex items-center gap-3 p-3 bg-slate-900/40 rounded-none border border-slate-800 hover:bg-slate-900/60 active:scale-95 transition-all cursor-pointer shadow-sm"
      >
        <img src={game.coverUrl} alt={game.title} className="w-16 h-20 object-cover rounded-none shadow-sm" />
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-white truncate">{game.title}</h4>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{game.genre[0]}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star size={12} className="fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-black text-slate-300">{game.rating}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(game.id)}
      className="relative group cursor-pointer active:scale-95 transition-all w-full"
    >
      <div className="overflow-hidden rounded-none shadow-md aspect-[3/4] mb-3 border border-slate-800 relative bg-slate-900">
        <img 
          src={game.coverUrl} 
          alt={game.title} 
          className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0" 
        />
        <div className="absolute top-2 right-2 bg-[#0a0612]/80 backdrop-blur-md px-2 py-1 rounded-none flex items-center gap-1 border border-purple-900/30">
          <Star size={12} className="fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-black text-white">{game.rating}</span>
        </div>
      </div>
      <h3 className="font-bold text-sm text-slate-100 line-clamp-2 px-1 leading-tight">{game.title}</h3>
      <p className="text-[11px] text-slate-500 mt-1 px-1 font-medium">{game.developer}</p>
    </div>
  );
};

export default GameCard;