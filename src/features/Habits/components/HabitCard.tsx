import { Link } from 'react-router-dom';
import { Edit, Trash2, CheckCircle } from 'lucide-react';
import { HabitInterface } from '../types';
import { useHabitStore } from '../store';

interface HabitCardProps {
  habit: HabitInterface;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  const { toggleCompletion, removeHabit } = useHabitStore();
  const today = new Date().toISOString().split('T')[0];
  const isCompletedToday = habit.completedDates.includes(today);

  const getFrequencyText = (frequency: string) => {
    switch (frequency) {
      case 'daily':
        return 'Diario';
      case 'weekly':
        return 'Semanal';
      case 'monthly':
        return 'Mensual';
      default:
        return frequency;
    }
  };

  const getTimeOfDayText = (timeOfDay?: string) => {
    if (!timeOfDay) return '';

    switch (timeOfDay) {
      case 'morning':
        return 'Mañana';
      case 'afternoon':
        return 'Tarde';
      case 'evening':
        return 'Noche';
      case 'anytime':
        return 'Cualquier momento';
      default:
        return timeOfDay;
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('¿Estás seguro de que quieres eliminar este hábito?')) {
      removeHabit(habit.id);
    }
  };

  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCompletion(habit.id, today);
  };

  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden transition-all ${habit.color} dark:text-white`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{habit.name}</h3>
          <div className="flex space-x-1">
            <button
              onClick={handleComplete}
              className={`p-1.5 rounded-full transition-colors ${
                isCompletedToday
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-white/80 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              title={
                isCompletedToday
                  ? 'Marcar como no completado'
                  : 'Marcar como completado'
              }
            >
              <CheckCircle size={18} />
            </button>
            <Link
              to={`/habits/${habit.id}`}
              className="p-1.5 rounded-full bg-white/80 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Editar hábito"
            >
              <Edit size={18} />
            </Link>
            <button
              onClick={handleDelete}
              className="p-1.5 rounded-full bg-white/80 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/50 text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              title="Eliminar hábito"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        <p className="text-sm mb-3 line-clamp-2">{habit.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs px-2 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300">
            {getFrequencyText(habit.frequency)}
          </span>
          {habit.timeOfDay && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300">
              {getTimeOfDayText(habit.timeOfDay)}
            </span>
          )}
        </div>
      </div>

      <div
        className={`h-2 ${
          isCompletedToday ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
        }`}
      ></div>
    </div>
  );
};

export default HabitCard;
