
import React, { useState } from 'react';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import { MOCK_GAMES } from '../mockData';
import GameCard from '../components/GameCard';

interface SearchViewProps {
  onSelectGame: (id: string) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ onSelectGame }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'RPG', 'Action', 'Roguelike', 'Adventure'];

  const filteredGames = MOCK_GAMES.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || game.genre.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 bg-[#0a0612]">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight">Game Catalog</h2>
        
        <div className="relative mb-6">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text"
            placeholder="Search titles, genres, studios..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-800 rounded-none py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-purple-900/20 transition-all shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-purple-400"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-none text-[11px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat 
                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/20' 
                  : 'bg-slate-900 border-slate-800 text-slate-500 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-none text-slate-500 shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </header>

      <section>
        <div className="flex justify-between items-center mb-6">
          <p className="text-xs font-black text-slate-600 uppercase tracking-widest">{filteredGames.length} Available</p>
          <select className="bg-transparent text-xs font-black text-purple-400 focus:outline-none cursor-pointer uppercase tracking-widest">
            <option className="bg-[#0a0612]">Popularity</option>
            <option className="bg-[#0a0612]">Rating</option>
            <option className="bg-[#0a0612]">Release</option>
          </select>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
            {filteredGames.map(game => (
              <div key={game.id} className="w-full">
                <GameCard game={game} onClick={onSelectGame} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-slate-900 rounded-none shadow-sm border border-slate-800 flex items-center justify-center mb-6">
              <SearchIcon size={32} className="text-slate-800" />
            </div>
            <p className="text-slate-500 font-bold">No results found.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-4 text-purple-400 text-xs font-black uppercase tracking-widest"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchView;