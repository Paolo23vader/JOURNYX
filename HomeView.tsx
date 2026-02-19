
import React from 'react';
import { Review } from '../types';
import { Heart, MessageCircle, MoreHorizontal, Star } from 'lucide-react';
import { MOCK_GAMES } from '../mockData';

interface ReviewCardProps {
  review: Review;
  onGameClick?: (id: string) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onGameClick }) => {
  const game = MOCK_GAMES.find(g => g.id === review.gameId);

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-none p-5 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img src={review.userAvatar} alt={review.userName} className="w-10 h-10 rounded-none border border-slate-700 shadow-sm" />
          <div>
            <h4 className="font-bold text-sm text-white">{review.userName}</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{review.date}</p>
          </div>
        </div>
        <button className="text-slate-600 hover:text-purple-400">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="mb-4">
        {game && (
          <div 
            onClick={() => onGameClick?.(game.id)}
            className="mb-2 inline-block px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-purple-900/50 transition-colors"
          >
            Reviewing: {game.title}
          </div>
        )}
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={`${i < review.rating ? 'fill-purple-500 text-purple-500' : 'text-slate-800'}`} 
            />
          ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          {review.content}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-pink-500 transition-colors">
            <Heart size={18} />
            <span className="text-xs font-black">{review.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-purple-400 transition-colors">
            <MessageCircle size={18} />
            <span className="text-xs font-black">{review.commentsCount}</span>
          </button>
        </div>
        {onGameClick && (
          <button 
            onClick={() => onGameClick(review.gameId)}
            className="text-[10px] font-black text-purple-400 uppercase tracking-wider hover:text-purple-300"
          >
            Review Game
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;