
import React, { useState } from 'react';
import { Grid, Bookmark, Share2, Heart, Play, Trophy, Clock, Target, Flag } from 'lucide-react';
import { CURRENT_USER, MOCK_REVIEWS, MOCK_GAMES, WAITED_2026_GAMES } from '../mockData';
import ReviewCard from '../components/ReviewCard';
import GameCard from '../components/GameCard';

interface ProfileViewProps {
  onSelectGame: (id: string) => void;
  wishlist: string[];
}

type TabType = 'posts' | 'journey' | 'saved';

const ProfileView: React.FC<ProfileViewProps> = ({ onSelectGame, wishlist }) => {
  const [activeTab, setActiveTab] = useState<TabType>('posts');

  const wishlistedGames = [...MOCK_GAMES, ...WAITED_2026_GAMES].filter(g => wishlist.includes(g.id));
  const playedGames = MOCK_GAMES.filter(g => g.timePlayed);

  return (
    <div className="pb-10 bg-[#0a0612]">
      <header className="relative">
        <div className="h-48 bg-gradient-to-br from-purple-900 to-indigo-950" />
        <div className="px-6 -mt-16 flex flex-col items-start relative z-10">
          <div className="flex w-full justify-between items-end mb-6">
            <img 
              src={CURRENT_USER.avatar} 
              alt={CURRENT_USER.name} 
              className="w-32 h-32 rounded-none border-4 border-[#0a0612] bg-slate-900 shadow-xl object-cover" 
            />
            <div className="flex gap-2 mb-2">
              <button className="p-3 bg-slate-900 border border-slate-800 rounded-none text-slate-500 shadow-sm hover:text-purple-400">
                <Share2 size={20} />
              </button>
              <button className="px-6 py-3 bg-purple-600 rounded-none text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-purple-900/30">
                Edit
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">{CURRENT_USER.name}</h2>
            <p className="text-sm text-purple-400 font-black mb-4 uppercase tracking-wider">{CURRENT_USER.handle}</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">{CURRENT_USER.bio}</p>
          </div>

          <div className="flex gap-10 mb-8 w-full py-8 border-y border-slate-800/50">
            <div className="text-center">
              <p className="text-2xl font-black text-white">{CURRENT_USER.stats.reviews}</p>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-white">{playedGames.length}</p>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Journey</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-white">{wishlist.length}</p>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Wishlist</p>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6">
        <div className="flex items-center gap-8 mb-8 overflow-x-auto no-scrollbar border-b border-slate-800/50">
          <button 
            onClick={() => setActiveTab('posts')}
            className={`pb-4 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap transition-all ${activeTab === 'posts' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-500'}`}
          >
            <Grid size={16} /> Posts
          </button>
          <button 
            onClick={() => setActiveTab('journey')}
            className={`pb-4 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap transition-all ${activeTab === 'journey' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-500'}`}
          >
            <Play size={16} /> My Journey
          </button>
          <button 
            onClick={() => setActiveTab('saved')}
            className={`pb-4 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap transition-all ${activeTab === 'saved' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-500'}`}
          >
            <Bookmark size={16} /> Saved
          </button>
        </div>

        {activeTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white uppercase tracking-wider">Recent Posts</h3>
              <button className="text-[10px] font-black text-purple-400 uppercase tracking-widest">See all</button>
            </div>
            {MOCK_REVIEWS.length > 0 ? (
              MOCK_REVIEWS.slice(0, 1).map(review => (
                <ReviewCard key={review.id} review={review} onGameClick={onSelectGame} />
              ))
            ) : (
              <p className="text-slate-500 text-sm py-10 text-center italic">No posts yet.</p>
            )}
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white uppercase tracking-wider">GAME STATISTICS</h3>
              <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">{playedGames.length} TITLES</p>
            </div>
            
            <div className="space-y-4">
              {playedGames.map(game => {
                const isShooter = game.genre.some(g => ['Shooter', 'FPS', 'PvP'].includes(g));
                const isRacing = game.genre.some(g => ['Racing'].includes(g));

                return (
                  <div 
                    key={game.id} 
                    onClick={() => onSelectGame(game.id)}
                    className="bg-slate-900/40 border border-slate-800 rounded-none p-4 flex gap-4 hover:shadow-md transition-all cursor-pointer group active:scale-[0.98]"
                  >
                    <div className="w-20 h-24 rounded-none overflow-hidden flex-shrink-0 shadow-sm bg-slate-900">
                      <img src={game.coverUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[0.2]" alt={game.title} />
                    </div>
                    <div className="flex-1 py-1">
                      <h4 className="font-bold text-slate-100 line-clamp-1 mb-3">{game.title}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Time Played</p>
                          <div className="flex items-center gap-1.5 text-purple-400">
                            <Clock size={12} />
                            <span className="text-xs font-black">{game.timePlayed}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Objectives</p>
                          <div className="flex items-center gap-1.5 text-yellow-500">
                            <Trophy size={12} />
                            <span className="text-xs font-black">{game.trophiesCount} / {game.totalTrophies}</span>
                          </div>
                        </div>
                        {isShooter && game.kdRatio !== undefined && (
                          <div className="space-y-1 col-span-2 mt-2 pt-2 border-t border-slate-800/50">
                            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Combat Performance</p>
                            <div className="flex items-center gap-1.5 text-pink-500">
                              <Target size={12} />
                              <span className="text-xs font-black">K/D Ratio: {game.kdRatio.toFixed(2)}</span>
                            </div>
                          </div>
                        )}
                        {isRacing && game.timeInFirst !== undefined && (
                          <div className="space-y-1 col-span-2 mt-2 pt-2 border-t border-slate-800/50">
                            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Track Performance</p>
                            <div className="flex items-center gap-1.5 text-blue-400">
                              <Flag size={12} />
                              <span className="text-xs font-black">Time in Lead: {game.timeInFirst}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white uppercase tracking-wider">Your Wishlist</h3>
              <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">{wishlistedGames.length} Items</p>
            </div>
            {wishlistedGames.length > 0 ? (
              <div className="grid grid-cols-1 gap-3">
                {wishlistedGames.map(game => (
                  <GameCard key={game.id} game={game} onClick={onSelectGame} compact={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-900/40 rounded-none border border-slate-800 border-dashed">
                <Heart size={32} className="mx-auto text-slate-800 mb-4" />
                <p className="text-slate-500 text-sm font-bold">Your wishlist is empty.</p>
                <p className="text-slate-600 text-[10px] uppercase font-bold mt-1">Start adding games you love!</p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProfileView;
