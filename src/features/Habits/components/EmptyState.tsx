import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, ClipboardList } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
  buttonText?: string;
  buttonLink?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No hay hábitos para mostrar',
  buttonText = 'Crear nuevo hábito',
  buttonLink = '/add'
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-full mb-4">
        <ClipboardList
          size={40}
          className="text-indigo-600 dark:text-indigo-400"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">{message}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        Comienza a crear hábitos para hacer un seguimiento de tus actividades
        diarias, semanales o mensuales.
      </p>
      <Link
        to={buttonLink}
        className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
      >
        <PlusCircle size={18} className="mr-2" />
        {buttonText}
      </Link>
    </div>
  );
};

export default EmptyState;
