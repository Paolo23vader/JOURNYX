
import React from 'react';
import { ViewType } from '../types';
import { Home, Search, User, Bell } from 'lucide-react';

interface BottomNavProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  const tabs: { type: ViewType; icon: React.ReactNode; label: string }[] = [
    { type: 'home', icon: <Home size={22} />, label: 'HOME' },
    { type: 'search', icon: <Search size={22} />, label: 'CATALOG' },
    { type: 'notifications', icon: <Bell size={22} />, label: 'ACTIVITY' },
    { type: 'profile', icon: <User size={22} />, label: 'PROFILE' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#0a0612]/95 backdrop-blur-md border-t border-purple-900/40 px-6 py-4 z-50 flex justify-between items-center shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => {
        const isActive = currentView === tab.type;
        return (
          <button
            key={tab.type}
            onClick={() => onNavigate(tab.type)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${
              isActive ? 'text-purple-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <div className="relative">
              {tab.icon}
              {tab.type === 'notifications' && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-pink-600 border-2 border-[#0a0612]"></span>
              )}
            </div>
            <span className={`text-[9px] font-black tracking-[0.1em] ${isActive ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;