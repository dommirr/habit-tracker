import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] transition-colors">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Mobile menu */}
      {isMenuOpen && <NavBar onItemClick={toggleMenu} />}

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
