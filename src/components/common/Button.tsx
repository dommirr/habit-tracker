interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: 'primary' | 'secondary' | 'danger';
}

const buttonClasses = {
  primary:
    'px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors flex items-center',
  secondary:
    'px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
  danger:
    'px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center'
};

const Button: React.FC<ButtonProps> = ({ children, appearance, ...props }) => {
  return (
    <button className={buttonClasses[appearance] + ' cursor-pointer'} {...props}>
      {children}
    </button>
  );
};

export default Button;
