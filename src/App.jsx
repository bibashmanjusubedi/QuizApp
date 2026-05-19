import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubjectSelection from './components/SubjectSelection';
import QuizCard from './components/QuizCard';
import Results from './components/Results';
import quizData from './data/data.json'; // We will create this file next!

export default function App() {
  const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Handle Dark Mode CSS Class
  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.body.style.backgroundColor = 'red';
  //     // document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, [theme]);


	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const handleNext = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    
    const nextIndex = currentIndex + 1;
    if (nextIndex < activeQuiz.questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white transition-colors duration-300 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header stays at the top of every screen */}
        <Header theme={theme} setTheme={setTheme} activeQuiz={activeQuiz} />
        
        <main className="mt-12">
          {!activeQuiz ? (
            <SubjectSelection quizzes={quizData.quizzes} onSelect={startQuiz} />
          ) : showResults ? (
            <Results 
              score={score} 
              total={activeQuiz.questions.length} 
              title={activeQuiz.title} 
              icon={activeQuiz.icon} 
              onReset={resetQuiz} 
            />
          ) : (
            <QuizCard 
              questionObj={activeQuiz.questions[currentIndex]} 
              total={activeQuiz.questions.length}
              currentNumber={currentIndex + 1}
              onNext={handleNext} 
            />
          )}
        </main>
      </div>
    </div>
  );
}