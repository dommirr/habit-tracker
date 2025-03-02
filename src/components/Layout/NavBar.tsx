import { Home, PlusCircle, BarChart2, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', icon: <Home size={20} />, label: 'Inicio' },
  { path: '/add', icon: <PlusCircle size={20} />, label: 'Agregar' },
  { path: '/stats', icon: <BarChart2 size={20} />, label: 'Estadísticas' },
  { path: '/settings', icon: <Settings size={20} />, label: 'Configuración' }
];

const NavBar = ({ onItemClick }: { onItemClick: () => void }) => {
  const location = useLocation();

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-2 flex flex-col">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-3 rounded-md flex items-center space-x-3 transition-colors ${
              location.pathname === item.path
                ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={onItemClick}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
