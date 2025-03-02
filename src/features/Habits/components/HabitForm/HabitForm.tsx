import React, { useState, useEffect } from 'react';
import { HabitInterface } from '../../types';
import { useNavigate } from 'react-router-dom';

interface HabitFormProps {
  initialData?: HabitInterface;
  onSubmit: (
    habitData: Omit<HabitInterface, 'id' | 'createdAt' | 'completedDates'>
  ) => void;
  isEditing?: boolean;
}

const HabitForm: React.FC<HabitFormProps> = ({
  initialData,
  onSubmit,
  isEditing = false
}) => {
  const [formData, setFormData] = useState<
    Omit<HabitInterface, 'id' | 'createdAt' | 'completedDates'>
  >({
    name: '',
    description: '',
    frequency: 'daily',
    timeOfDay: 'anytime',
    color: 'bg-indigo-100 dark:bg-indigo-900'
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, createdAt, completedDates, ...rest } = initialData;
      setFormData(rest);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      description: '',
      frequency: 'daily',
      timeOfDay: 'anytime',
      color: 'bg-indigo-100 dark:bg-indigo-900'
    });
    navigate('/habits');
  };

  const colorOptions = [
    { value: 'bg-indigo-100 dark:bg-indigo-900', label: 'Índigo' },
    { value: 'bg-emerald-100 dark:bg-emerald-900', label: 'Esmeralda' },
    { value: 'bg-amber-100 dark:bg-amber-900', label: 'Ámbar' },
    { value: 'bg-sky-100 dark:bg-sky-900', label: 'Cielo' },
    { value: 'bg-rose-100 dark:bg-rose-900', label: 'Rosa' },
    { value: 'bg-violet-100 dark:bg-violet-900', label: 'Violeta' },
    { value: 'bg-teal-100 dark:bg-teal-900', label: 'Verde azulado' },
    { value: 'bg-orange-100 dark:bg-orange-900', label: 'Naranja' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nombre del hábito
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ej: Meditar, Leer, Ejercicio..."
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Describe tu hábito..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="frequency" className="block text-sm font-medium mb-1">
            Frecuencia
          </label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="daily">Diario</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensual</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeOfDay" className="block text-sm font-medium mb-1">
            Momento del día
          </label>
          <select
            id="timeOfDay"
            name="timeOfDay"
            value={formData.timeOfDay}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noche</option>
            <option value="anytime">Cualquier momento</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Color</label>
        <div className="grid grid-cols-4 gap-2">
          {colorOptions.map((color) => (
            <div
              key={color.value}
              className={`cursor-pointer rounded-md p-4 border-2 transition-all ${
                formData.color === color.value
                  ? 'border-indigo-500 dark:border-indigo-400 shadow-md'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              } ${color.value}`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, color: color.value }))
              }
            >
              <span className="sr-only">{color.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isEditing ? 'Actualizar hábito' : 'Crear hábito'}
        </button>
      </div>
    </form>
  );
};

export default HabitForm;
