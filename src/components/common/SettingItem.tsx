interface SettingItemProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default SettingItem;
