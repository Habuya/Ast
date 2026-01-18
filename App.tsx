import React, { useState } from 'react';
import Cursor from './components/Cursor';
import SoulCard from './components/SoulCard';
import NervKiller from './components/NervKiller';
import FinanceGuardian from './components/FinanceGuardian';
import Roadmap from './components/Roadmap';
import DreamStream from './components/DreamStream';
import KnowledgeDistiller from './components/KnowledgeDistiller';
import DecisionCompass from './components/DecisionCompass';
import ParticleField from './components/ParticleField';
import EnergyBattery from './components/EnergyBattery';
import ProfileView from './components/ProfileView';
import { useHaptics } from './hooks/useHaptics';
import { Tab } from './types';
import { CosmicProvider, useCosmic } from './contexts/CosmicContext';

// Inner App Component to consume context
const AuraOS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const { playClick } = useHaptics();
  const { biorhythmMode } = useCosmic();

  const handleTabChange = (tab: Tab) => {
    playClick();
    setActiveTab(tab);
  };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Start', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'mail', label: 'Komm', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'agents', label: 'Agent', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: 'knowledge', label: 'Daten', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'profile', label: 'Sys', icon: 'M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 16H4m12 0h2m-6 0H4m8-2V8m0 0a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0-6H8a2 2 0 00-2 2v6a2 2 0 002 2h4' },
  ];

  // Specific handler for FAB to launch Agent/DreamStream
  const handleAgentLaunch = () => {
    playClick();
    setActiveTab('agents');
  };

  return (
    <div className={`h-[100dvh] w-full relative bg-[#020617] text-slate-200 selection:bg-cyan-500/30 overflow-hidden transition-colors duration-[2000ms] ${biorhythmMode === 'regeneration' ? 'saturate-[0.8]' : ''}`}>
      
      {/* Background Particles */}
      <ParticleField />
      
      {/* Dynamic Ambient Light based on Mode */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-opacity duration-[3000ms] z-0
          ${biorhythmMode === 'high-performance' ? 'opacity-20' : 'opacity-5'}
        `}
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.4), transparent 70%)'
        }}
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay z-10"></div>

      {/* Custom Cursor (Desktop Only) */}
      <div className="hidden lg:block">
        <Cursor />
      </div>

      {/* Desktop Header (Hidden on Mobile) */}
      <nav className="hidden lg:flex fixed top-0 left-0 w-full z-50 px-8 py-6 justify-between items-center bg-gradient-to-b from-[#020617] to-transparent">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full shadow-[0_0_10px_white] transition-colors duration-1000 ${biorhythmMode === 'high-performance' ? 'bg-cyan-400 shadow-cyan-400' : 'bg-indigo-400 shadow-indigo-400'}`}></div>
          <span className="text-sm font-light tracking-[0.2em] text-white/90">AURA OS</span>
        </div>
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="w-20 text-right flex flex-col items-end">
           <span className="text-[10px] font-mono text-slate-500">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </nav>

      {/* Mobile Top Status Bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent">
          <div className="flex items-center gap-2">
             <div className={`w-1.5 h-1.5 rounded-full ${biorhythmMode === 'high-performance' ? 'bg-cyan-400' : 'bg-indigo-400'}`}></div>
             <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">Aura OS</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      </div>

      {/* Main Content Area - Full Scrollable */}
      <main className="relative z-20 w-full h-full pt-16 lg:pt-24 pb-28 lg:pb-12 px-4 md:px-12 overflow-y-auto overflow-x-hidden custom-scrollbar touch-pan-y">
        <div className="w-full max-w-[1400px] mx-auto min-h-full">
          
          {activeTab === 'dashboard' && (
            <div className="w-full animate-[fadeIn_0.5s_ease-out] pb-12">
              <div className="matrix-container">
                {/* Mobile: Vertical Stack / Desktop: Grid */}
                <div className="matrix-main flex flex-col gap-6">
                  <div className="flex-1 min-h-[420px]">
                    <SoulCard className="h-full w-full" />
                  </div>
                  <div className="h-auto min-h-[300px]">
                    <EnergyBattery />
                  </div>
                </div>
                
                <div className="matrix-side">
                  <div className="h-auto min-h-[300px]">
                    <DecisionCompass />
                  </div>
                  <div className="h-[500px] lg:h-auto lg:flex-1">
                     <Roadmap />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mail' && (
             <div className="w-full h-full flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-full h-[80vh] lg:h-[85vh]">
                   <NervKiller />
                </div>
             </div>
          )}

          {/* Finance is accessible via Dashboard on Desktop, but let's allow explicit access too if we added a tab */}
          {activeTab === 'finance' && (
            <div className="w-full h-full flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
              <div className="w-full max-w-4xl h-[80vh] lg:h-[600px]">
                <FinanceGuardian />
              </div>
            </div>
          )}

          {activeTab === 'agents' && (
            <div className="w-full h-full flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
              <div className="w-full max-w-5xl flex flex-col lg:grid lg:grid-cols-2 gap-8 h-auto lg:h-[500px]">
                {/* On Mobile, prioritize DreamStream */}
                <div className="h-[500px] lg:h-auto order-1 lg:order-2">
                   <DreamStream />
                </div>
                <div className="h-[300px] lg:h-auto order-2 lg:order-1">
                  <DecisionCompass />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'knowledge' && (
            <div className="w-full h-full flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
               <div className="w-full max-w-4xl h-[80vh] lg:h-[600px]">
                <KnowledgeDistiller />
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="w-full h-full flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
               <ProfileView />
            </div>
          )}
        </div>
      </main>

      {/* FAB (Floating Action Button) - Mobile Only */}
      <div className="lg:hidden fixed bottom-24 right-6 z-50">
         <button 
           onClick={handleAgentLaunch}
           className="w-14 h-14 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center text-slate-900 border border-white/20 active:scale-95 transition-transform"
         >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
         </button>
      </div>

      {/* Bottom Tab Bar (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-t border-white/10 pb-safe pt-2 px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
         <div className="flex justify-around items-center h-16">
            {tabs.map((tab) => {
               const isActive = activeTab === tab.id;
               return (
                 <button
                   key={tab.id}
                   onClick={() => handleTabChange(tab.id)}
                   className={`flex flex-col items-center justify-center w-full h-full gap-1 active:scale-90 transition-transform ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}
                 >
                    <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-cyan-500/10' : 'bg-transparent'}`}>
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2 : 1.5} d={tab.icon} />
                       </svg>
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider">{tab.label}</span>
                 </button>
               );
            })}
         </div>
         {/* Safe Area Spacer for iOS Home Bar */}
         <div className="h-[env(safe-area-inset-bottom)]"></div>
      </nav>

    </div>
  );
};

const App: React.FC = () => {
  return (
    <CosmicProvider>
      <AuraOS />
    </CosmicProvider>
  );
};

export default App;