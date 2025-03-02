import Layout from '@/components/Layout/Layout';
import HabitForm from '../components/HabitForm/HabitForm';
import { useHabitStore } from '../store';
import { HabitInterface } from '../types';

const AddHabitPage = () => {
  const { addHabit } = useHabitStore();
  const handleSubmit = (
    habitData: Omit<HabitInterface, 'id' | 'createdAt' | 'completedDates'>
  ) => {
    addHabit(habitData);
  };

  return (
    <Layout>
      <HabitForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default AddHabitPage;
