import { Home, PlusCircle, BarChart2, Settings, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/habits', icon: <Home size={20} />, label: 'Inicio' },
  { path: '/habits/add', icon: <PlusCircle size={20} />, label: 'Agregar' },
  { path: '/stats', icon: <BarChart2 size={20} />, label: 'Estadísticas' },
  { path: '/settings', icon: <Settings size={20} />, label: 'Configuración' },
];

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-[var(--color-surface)] shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center transition-colors">
            <BarChart2
              size={24}
              className="text-[var(--color-white)] transition-colors"
            />
          </div>
          <span className="text-xl font-semibold">HabitTracker</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden cursor-pointer p-2 rounded-md hover:bg-[var(--color-secondary)] transition-colors"
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
                  ? 'bg-[var(--color-primary)] hover:bg-[var(--color-blue)] text-[var(--color-white)] transition-colors'
                  : 'hover:bg-[var(--color-blue)] hover:text-[var(--color-white)] transition-colors'
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
