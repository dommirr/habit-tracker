interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
  color,
}) => {
  return (
    <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-5 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[var(--color-text-primary)]">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {description && (
            <p className="text-xs text-[var(--color-text-primary)] mt-1">
              {description}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;
