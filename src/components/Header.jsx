import React from 'react';

export default function Header({ theme, setTheme, activeQuiz }) {
  return (
    <header className="flex justify-between items-center py-6">
      <div className="flex items-center gap-4">
        {activeQuiz && (
          <>
            <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-2xl">
              {activeQuiz.icon}
            </span>
            <h1 className="text-xl font-bold font-heading">{activeQuiz.title}</h1>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className={theme === 'light' ? 'text-purple-600' : 'text-slate-400'}>☀️</span>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="w-12 h-6 bg-purple-600 rounded-full relative transition-colors"
        >
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${theme === 'dark' ? 'left-7' : 'left-1'}`}></div>
        </button>
        <span className={theme === 'dark' ? 'text-purple-600' : 'text-slate-400'}>🌙</span>
      </div>
    </header>
  );
}