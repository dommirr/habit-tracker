interface SettingCardProps {
  title: string;
  children: React.ReactNode;
}

const SettingCard: React.FC<SettingCardProps> = ({ title, children }) => {
  return (
    <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-6 transition-colors">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SettingCard;
