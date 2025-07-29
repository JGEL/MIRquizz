
import React from 'react';

interface SystemSelectorProps {
  systems: string[];
  onSelectSystem: (system: string) => void;
}

const SystemSelector: React.FC<SystemSelectorProps> = ({ systems, onSelectSystem }) => {
  const allSystems = ['Todos', ...systems];
  
  return (
    <div className="w-full max-w-6xl bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg text-center animate-fade-in">
      <h2 className="text-2xl font-bold mb-2 text-teal-700 dark:text-teal-400">Bienvenido</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-8">Selecciona un sistema para comenzar tu práctica.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {allSystems.map(system => (
          <button
            key={system}
            onClick={() => onSelectSystem(system)}
            className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-slate-800"
          >
            {system}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SystemSelector;