import React from 'react';

export default function SubjectSelection({ quizzes, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <h1 className="text-5xl font-light leading-tight">
          Welcome to the <br />
          <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="mt-8 text-slate-500 italic">Pick a subject to get started.</p>
      </div>

      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <button
            key={quiz.title}
            onClick={() => onSelect(quiz)}
            className="w-full bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center gap-6 shadow-sm hover:ring-2 hover:ring-purple-600 transition-all group"
          >
            <span className="bg-slate-100 dark:bg-slate-700 p-3 rounded-xl text-2xl group-hover:scale-110 transition-transform">
              {quiz.icon}
            </span>
            <span className="text-xl font-bold">{quiz.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}