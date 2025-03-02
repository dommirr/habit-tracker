import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import HabitCard from '../components/HabitCard';
import EmptyState from '../components/EmptyState';
import { useHabitStore } from '../store';

const HomePage: React.FC = () => {
  const { habits } = useHabitStore();

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mis Hábitos</h1>
        <Link
          to="/habits/add"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
        >
          <PlusCircle size={18} className="mr-2" />
          Nuevo Hábito
        </Link>
      </div>

      {habits.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
