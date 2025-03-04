import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import HabitForm from '../components/HabitForm';
import { HabitInterface } from '../types';
import { useHabitStore } from '../store';

const EditHabitPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const updateHabit = useHabitStore((state) => state.updateHabit);
  const getHabit = useHabitStore((state) => state.getHabit);
  const navigate = useNavigate();

  const habit = getHabit(id || '');

  if (!habit) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Hábito no encontrado</h2>
          <p className="mb-6">
            El hábito que intentas editar no existe o ha sido eliminado.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (
    habitData: Omit<HabitInterface, 'id' | 'createdAt' | 'completedDates'>
  ) => {
    updateHabit({
      ...habit,
      ...habitData,
    });
    navigate('/');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Editar Hábito</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <HabitForm initialData={habit} onSubmit={handleSubmit} isEditing />
        </div>
      </div>
    </Layout>
  );
};

export default EditHabitPage;
