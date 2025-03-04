import React, { useState } from 'react';
import { Moon, Save, Sun, Trash2 } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useHabitStore } from '@/features/Habits/store';
import Layout from '@/components/Layout/Layout';
import SettingItem from '@/features/Settings/components/SettingItem';
import SettingCard from '@/features/Settings/components/SettingCard';
import Button from '@/components/common/Button';
import Title from '@/components/common/Title';

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const habits = useHabitStore((state) => state.habits);
  const removeHabit = useHabitStore((state) => state.removeHabit);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);

  const handleToggleHabit = (id: string) => {
    setSelectedHabits((prev) =>
      prev.includes(id)
        ? prev.filter((habitId) => habitId !== id)
        : [...prev, id]
    );
  };

  const icon = {
    dark: <Sun size={20} />,
    light: <Moon size={20} />,
  };

  return (
    <Layout>
      <Title title="Configuración" />
      <div className="space-y-6">
        {/* Tema */}
        <SettingCard title="Apariencia">
          <SettingItem
            title="Tema"
            description="Cambia entre modo claro y oscuro"
          >
            <Button onClick={toggleTheme} appearance="primary">
              {icon[theme]}
            </Button>
          </SettingItem>
        </SettingCard>

        {/* Gestión de hábitos */}
        <SettingCard title="Gestión de hábitos">
          {habits.length === 0 ? (
            <p className="text-[var(--color-text-secondary)]">
              No hay hábitos para gestionar.
            </p>
          ) : (
            <>
              <div className="mb-4">
                <SettingItem
                  title="Selecciona los hábitos"
                  description="Selecciona los hábitos que deseas eliminar"
                />

                <div className="space-y-2 max-h-60 overflow-y-auto mt-4">
                  {habits.map((habit) => (
                    <div
                      key={habit.id}
                      className="flex items-center p-2 rounded-md hover:bg-[var(--color-secondary)]"
                    >
                      <input
                        type="checkbox"
                        id={`habit-${habit.id}`}
                        checked={selectedHabits.includes(habit.id)}
                        onChange={() => handleToggleHabit(habit.id)}
                        className="mr-3 h-4 w-4 text-[var(--color-text-primary)] focus:ring-[var(--color-blue)] border-[var(--color-surface)] rounded"
                      />
                      <label
                        htmlFor={`habit-${habit.id}`}
                        className="flex-grow cursor-pointer"
                      >
                        {habit.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {selectedHabits.length > 0 && (
                <div className="flex justify-end">
                  {showConfirmation ? (
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => setShowConfirmation(false)}
                        appearance="secondary"
                      >
                        Cancelar
                      </Button>
                      <Button
                        onClick={() => {
                          selectedHabits.map(removeHabit);
                          setShowConfirmation(false);
                          setSelectedHabits([]);
                        }}
                        appearance="danger"
                      >
                        <Trash2 size={16} className="mr-2" />
                        Confirmar eliminación
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => setShowConfirmation(true)}
                      appearance="danger"
                    >
                      <Trash2 size={16} className="mr-2" />
                      Eliminar seleccionados ({selectedHabits.length})
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </SettingCard>

        {/* Exportar datos */}
        <SettingCard title="Datos">
          <SettingItem
            title="Exportar datos"
            description="Descarga tus hábitos en formato JSON"
          >
            <Button
              appearance="primary"
              onClick={() => {
                const dataStr = JSON.stringify(habits, null, 2);
                const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
                  dataStr
                )}`;

                const exportFileDefaultName = `habit-tracker-data-${
                  new Date().toISOString().split('T')[0]
                }.json`;

                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', exportFileDefaultName);
                linkElement.click();
              }}
            >
              <Save size={16} className="mr-2" />
              Exportar
            </Button>
          </SettingItem>
        </SettingCard>
      </div>
    </Layout>
  );
};

export default SettingsPage;
