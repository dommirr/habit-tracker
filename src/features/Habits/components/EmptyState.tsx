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
  buttonLink = '/habits/add',
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-[var(--color-background)] p-4 rounded-full mb-4">
        <ClipboardList size={40} className="text-[var(--color-text-primary)]" />
      </div>
      <h3 className="text-xl font-medium mb-2">{message}</h3>
      <p className="text-[var(--color-text-primary)] mb-6 max-w-md">
        Comienza a crear hábitos para hacer un seguimiento de tus actividades
        diarias, semanales o mensuales.
      </p>
      <Link
        to={buttonLink}
        className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-text-primary)] rounded-md transition-colors"
      >
        <PlusCircle size={18} className="mr-2" />
        {buttonText}
      </Link>
    </div>
  );
};

export default EmptyState;
