import React from 'react';

export default function Results({ score, total, title, icon, onReset }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-5xl font-light">
          Quiz completed <br />
          <span className="font-bold">You scored...</span>
        </h1>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-sm text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-2xl">{icon}</span>
            <span className="text-xl font-bold">{title}</span>
          </div>
          <p className="text-8xl font-bold">{score}</p>
          <p className="text-slate-500">out of {total}</p>
        </div>

        <button 
          onClick={onReset}
          className="w-full bg-purple-600 text-white p-5 rounded-2xl font-bold hover:bg-purple-500 transition-all"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}