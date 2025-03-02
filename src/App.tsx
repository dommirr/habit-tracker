import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Habits from './features/Habits/Habits';
import Stats from './features/Stats/Stats';
import Settings from './features/Settings/Settings';
import NotFound from './features/Habits/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/habits/*" element={<Habits />} />
        <Route path="/stats/*" element={<Stats />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/" element={<Navigate to="/habits" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
