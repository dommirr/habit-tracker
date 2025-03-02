import { Routes, Route } from 'react-router-dom';
import AddHabitPage from '@/features/Habits/pages/AddHabitPage';
import HomePage from '@/features/Habits/pages/HomePage';
import EditHabitPage from '@/features/Habits/pages/EditHabitPage';
import NotFoundPage from '@/features/Habits/pages/NotFoundPage';

function Habits() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddHabitPage />} />
      <Route path="/:id" element={<EditHabitPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Habits;
