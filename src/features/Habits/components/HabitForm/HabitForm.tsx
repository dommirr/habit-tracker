import React, { useState, useEffect } from "react";
import { DropletOff } from "lucide-react";
import { HabitInterface } from "../../types";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";

interface HabitFormProps {
  initialData?: HabitInterface;
  onSubmit: (
    habitData: Omit<HabitInterface, "id" | "createdAt" | "completedDates">
  ) => void;
  isEditing?: boolean;
}

const colorOptions = [
  { value: "bg-[var(--color-blue)]", label: "Azul Pastel" },
  { value: "bg-[var(--color-pink)]", label: "Rosa Suave" },
  { value: "bg-[var(--color-green)]", label: "Verde Menta" },
  { value: "bg-[var(--color-yellow)]", label: "Dorado Pastel" },
  { value: "bg-[var(--color-red)]", label: "Rojo Coral" },
  { value: "bg-[var(--color-purple)]", label: "Lavanda" },
  { value: "bg-[var(--color-cyan)]", label: "Cian Pastel" },
  { value: "bg-[var(--color-orange)]", label: "Durazno Suave" },
  { value: "bg-[var(--color-gray)]", label: "Gris Neutro" },
  { value: "bg-[var(--color-teal)]", label: "Verde Azulado" },
  { value: "bg-[var(--color-slate-blue)]", label: "Azul Grisáceo" },
  { value: "bg-transparent", label: "Transparente" },
];

const HabitForm: React.FC<HabitFormProps> = ({
  initialData,
  onSubmit,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState<
    Omit<HabitInterface, "id" | "createdAt" | "completedDates">
  >({
    name: "",
    description: "",
    frequency: "daily",
    timeOfDay: "anytime",
    color: "bg-indigo-100 dark:bg-indigo-900",
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
      name: "",
      description: "",
      frequency: "daily",
      timeOfDay: "anytime",
      color: "bg-indigo-100 dark:bg-indigo-900",
    });
    navigate("/habits");
  };

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
          className="w-full px-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
          className="w-full px-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
            className="w-full px-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
            className="w-full px-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
        <div className="grid grid-cols-6 gap-2">
          {colorOptions.map((color) => (
            <div
              key={color.value}
              className={`flex justify-center cursor-pointer rounded-md p-4 border-2 transition-all ${
                formData.color === color.value
                  ? "border-[var(--color-primary)] shadow-md"
                  : "border-[var(--color-border)]"
              } ${color.value}`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, color: color.value }))
              }
            >
              <span className="sr-only">{color.label}</span>
              {color.value === "bg-transparent" ? (
                <DropletOff
                  size={16}
                  className="text-[var(--color-text-primary)]"
                />
              ) : (
                <div className="w-4 h-4 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">
          {isEditing ? "Actualizar hábito" : "Crear hábito"}
        </Button>
      </div>
    </form>
  );
};

export default HabitForm;
