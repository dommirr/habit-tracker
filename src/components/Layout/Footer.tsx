function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        HabitTracker © {new Date().getFullYear()} - Desarrollado con React,
        TypeScript y Tailwind CSS
      </div>
    </footer>
  );
}

export default Footer;
