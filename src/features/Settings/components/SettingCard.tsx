interface SettingCardProps {
  title: string;
  children: React.ReactNode;
}

const SettingCard: React.FC<SettingCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SettingCard;
