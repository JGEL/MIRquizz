
import React, { useState, useEffect, useCallback } from 'react';
import { QUESTIONS, SYSTEMS } from './constants';
import { Question } from './types';
import SystemSelector from './components/SystemSelector';
import QuizCard from './components/QuizCard';
import ResultsScreen from './components/ResultsScreen';
import { BrainIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (selectedSystem) {
      const questions = selectedSystem === 'Todos' 
        ? QUESTIONS 
        : QUESTIONS.filter(q => q.system === selectedSystem);
      setFilteredQuestions(questions);
      setCurrentQuestionIndex(0);
      setScore(0);
      setQuizFinished(false);
    }
  }, [selectedSystem]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  }, []);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  }, [currentQuestionIndex, filteredQuestions.length]);

  const handleRestart = useCallback(() => {
    setSelectedSystem(null);
    setFilteredQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  }, []);
  
  const renderContent = () => {
    if (quizFinished) {
      return (
        <ResultsScreen 
          score={score} 
          totalQuestions={filteredQuestions.length} 
          onRestart={handleRestart} 
        />
      );
    }
    
    if (selectedSystem && filteredQuestions.length > 0) {
      return (
        <QuizCard
          question={filteredQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={filteredQuestions.length}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
        />
      );
    }

    return <SystemSelector systems={SYSTEMS} onSelectSystem={setSelectedSystem} />;
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-center bg-teal-600 dark:bg-teal-700 p-4 rounded-lg shadow-lg">
          <BrainIcon />
          <h1 className="ml-4 text-2xl sm:text-3xl font-bold text-white tracking-wide">
            MIR Quiz App
          </h1>
        </div>
      </header>
      <main className="w-full max-w-6xl mx-auto flex-grow flex items-center justify-center">
        {renderContent()}
      </main>
      <footer className="w-full max-w-6xl mx-auto mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>Practica para el examen MIR. ¡Mucho éxito!</p>
      </footer>
    </div>
  );
};

export default App;