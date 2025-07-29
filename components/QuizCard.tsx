
import React, { useState, useEffect } from 'react';
import { Question, OptionKey } from '../types';
import { CheckIcon, XIcon } from './icons';

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, questionNumber, totalQuestions, onAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (optionKey: OptionKey) => {
    if (isAnswered) return;
    setSelectedOption(optionKey);
    setIsAnswered(true);
    onAnswer(optionKey === question.correctAnswer);
  };

  const getOptionClasses = (optionKey: OptionKey) => {
    if (!isAnswered) {
      return "bg-white dark:bg-slate-700 hover:bg-teal-100 dark:hover:bg-slate-600";
    }
    if (optionKey === question.correctAnswer) {
      return "bg-green-200 dark:bg-green-800 border-green-500 ring-2 ring-green-500";
    }
    if (optionKey === selectedOption) {
      return "bg-red-200 dark:bg-red-800 border-red-500";
    }
    return "bg-white dark:bg-slate-700";
  };

  return (
    <div className="w-full bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="mb-4">
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">{question.system} | Año {question.year}</p>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Pregunta {questionNumber} de {totalQuestions}
          </p>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-2">
            <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
        </div>
      </div>

      <p className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-6">{question.statement}</p>
      
      {question.image && (
        <div className="mb-6 flex justify-center">
          <img src={question.image} alt="Referencia de la pregunta" className="rounded-lg max-h-64 shadow-md" />
        </div>
      )}

      <div className="space-y-3">
        {(Object.keys(question.options) as OptionKey[]).map(key => (
          <button
            key={key}
            onClick={() => handleOptionClick(key)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 border-transparent transition-all duration-300 flex items-center justify-between ${getOptionClasses(key)} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <span className="font-medium">{key}. {question.options[key]}</span>
            {isAnswered && (
                <span className="flex-shrink-0 ml-4 h-6 w-6 rounded-full flex items-center justify-center text-white">
                    {key === question.correctAnswer && <CheckIcon />}
                    {key === selectedOption && key !== question.correctAnswer && <XIcon />}
                </span>
            )}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-8 text-right">
          <button
            onClick={onNext}
            className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-slate-800"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
