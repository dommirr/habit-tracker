import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import HabitCard from '../components/HabitCard';
import EmptyState from '../components/EmptyState';
import { useHabitStore } from '../store';
import Button from '@/components/common/Button';

const HomePage: React.FC = () => {
  const habits = useHabitStore((state) => state.habits);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mis Hábitos</h1>
        <Button as={Link} to="/habits/add">
          <PlusCircle size={18} className="mr-2" />
          Nuevo Hábito
        </Button>
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
