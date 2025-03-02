import { Routes, Route } from 'react-router-dom';
import SettingsPage from './pages/SettingsPage';
import NotFound from '@/features/Habits/pages/NotFound';

function Settings() {
  return (
    <Routes>
      <Route path="/" element={<SettingsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Settings;
