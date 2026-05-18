import React, { useState } from 'react';

export default function QuizCard({ questionObj, total, currentNumber, onNext }) {
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!selected) {
      setShowError(true);
      return;
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    onNext(selected === questionObj.answer);
    setSelected(null);
    setIsSubmitted(false);
    setShowError(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="italic text-slate-500 text-sm mb-4">Question {currentNumber} of {total}</p>
          <h2 className="text-2xl md:text-3xl font-bold">{questionObj.question}</h2>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white dark:bg-slate-800 h-4 rounded-full p-1 mt-12 md:mt-0">
          <div 
            className="bg-purple-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${(currentNumber / total) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        {questionObj.options.map((option, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isCorrect = option === questionObj.answer;
          const isSelected = selected === option;

          let borderClass = "border-transparent";
          if (isSelected) borderClass = "border-purple-600";
          if (isSubmitted && isCorrect) borderClass = "border-green-500";
          if (isSubmitted && isSelected && !isCorrect) borderClass = "border-red-500";

          return (
            <button
              key={option}
              disabled={isSubmitted}
              onClick={() => { setSelected(option); setShowError(false); }}
              className={`w-full bg-white dark:bg-slate-800 border-2 ${borderClass} p-4 rounded-2xl flex items-center justify-between group transition-all`}
            >
              <div className="flex items-center gap-6">
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${isSelected ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                  {letter}
                </span>
                <span className="text-lg font-bold">{option}</span>
              </div>
              
              {/* Feedback Icons */}
              {isSubmitted && isCorrect && <span>✅</span>}
              {isSubmitted && isSelected && !isCorrect && <span>❌</span>}
            </button>
          );
        })}

        {!isSubmitted ? (
          <button onClick={handleSubmit} className="w-full bg-purple-600 text-white p-5 rounded-2xl font-bold hover:bg-purple-500 shadow-purple-lg transition-all">
            Submit Answer
          </button>
        ) : (
          <button onClick={handleNext} className="w-full bg-purple-600 text-white p-5 rounded-2xl font-bold hover:bg-purple-500 shadow-purple-lg transition-all">
            Next Question
          </button>
        )}

        {showError && <p className="text-red-500 text-center flex items-center justify-center gap-2">Please select an answer</p>}
      </div>
    </div>
  );
}