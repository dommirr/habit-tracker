import { Routes, Route } from 'react-router-dom';
import StatsPage from './pages/StatsPage';
import NotFound from '@/features/Habits/pages/NotFound';

function Stats() {
  return (
    <Routes>
      <Route path="/" element={<StatsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Stats;
