import { Home, PlusCircle, BarChart2, Settings, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/habits', icon: <Home size={20} />, label: 'Inicio' },
  { path: '/habits/add', icon: <PlusCircle size={20} />, label: 'Agregar' },
  { path: '/stats', icon: <BarChart2 size={20} />, label: 'Estadísticas' },
  { path: '/settings', icon: <Settings size={20} />, label: 'Configuración' }
];

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
            <BarChart2 size={18} className="text-white" />
          </div>
          <span className="text-xl font-semibold">HabitTracker</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md flex items-center space-x-1 transition-colors ${
                location.pathname === item.path
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
