import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddHabit from './pages/AddHabit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import Stats from './pages/Stats';
import EditHabit from './pages/EditHabit';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddHabit />} />
        <Route path="/edit/:id" element={<EditHabit />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
