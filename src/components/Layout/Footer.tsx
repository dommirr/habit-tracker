const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] shadow-sm py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-[var(--color-text-primary)]">
        HabitTracker © {new Date().getFullYear()} - Desarrollado con React,
        TypeScript y Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
