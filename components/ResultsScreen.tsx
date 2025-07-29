
import React from 'react';
import { TrophyIcon } from './icons';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  
  const getFeedback = () => {
    if (percentage === 100) return "¡Perfecto! ¡Eres un experto!";
    if (percentage >= 75) return "¡Excelente trabajo!";
    if (percentage >= 50) return "¡Buen intento! Sigue practicando.";
    return "No te desanimes, ¡la práctica hace al maestro!";
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg text-center animate-fade-in">
      <div className="flex justify-center mb-4">
        <TrophyIcon />
      </div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Quiz Completado</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{getFeedback()}</p>
      
      <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg">
        <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">Tu Puntuación</p>
        <p className="text-5xl font-bold text-teal-600 dark:text-teal-400 my-2">{score} / {totalQuestions}</p>
        <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">({percentage}%)</p>
      </div>
      
      <button
        onClick={onRestart}
        className="mt-8 w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-slate-800"
      >
        Volver a Empezar
      </button>
    </div>
  );
};

export default ResultsScreen;
