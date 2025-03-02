import { Routes, Route } from 'react-router-dom';
import AddHabit from '@/features/Habits/pages/AddHabit';
import Home from '@/features/Habits/pages/Home';
import EditHabit from '@/features/Habits/pages/EditHabit';
import NotFound from '@/features/Habits/pages/NotFound';
function Habits() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddHabit />} />
      <Route path="/:id" element={<EditHabit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Habits;
