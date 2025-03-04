import { Home, PlusCircle, BarChart2, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/habits", icon: <Home size={20} />, label: "Inicio" },
  { path: "/habits/add", icon: <PlusCircle size={20} />, label: "Agregar" },
  { path: "/stats", icon: <BarChart2 size={20} />, label: "Estadísticas" },
  { path: "/settings", icon: <Settings size={20} />, label: "Configuración" },
];

const NavBar = ({ onItemClick }: { onItemClick: () => void }) => {
  const location = useLocation();

  return (
    <div className="md:hidden bg-[var(-color-surface)] shadow-md transition-colors">
      <nav className="container mx-auto px-4 py-2 flex flex-col">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-3 rounded-md flex items-center space-x-3 transition-colors ${
              location.pathname === item.path
                ? "bg-[var(--color-primary)] text-[var(--color-white)]]"
                : "hover:bg-[var(--color-secondary)]"
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
