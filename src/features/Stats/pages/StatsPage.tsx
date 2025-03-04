import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Activity, Calendar, CheckCircle, Clock } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import Layout from '@/components/Layout';
import { useHabitStore } from '@/features/Habits/store';

const StatsPage: React.FC = () => {
  const habits = useHabitStore((state) => state.habits);

  // Calcular estadísticas
  const totalHabits = habits.length;
  const today = new Date().toISOString().split('T')[0];
  const habitsCompletedToday = habits.filter((habit) =>
    habit.completedDates.includes(today)
  ).length;

  const completionRate =
    totalHabits > 0
      ? Math.round((habitsCompletedToday / totalHabits) * 100)
      : 0;

  // Datos para el gráfico de frecuencia
  const frequencyData = [
    {
      name: 'Diario',
      value: habits.filter((h) => h.frequency === 'daily').length,
    },
    {
      name: 'Semanal',
      value: habits.filter((h) => h.frequency === 'weekly').length,
    },
    {
      name: 'Mensual',
      value: habits.filter((h) => h.frequency === 'monthly').length,
    },
  ];

  // Datos para el gráfico de momento del día
  const timeOfDayData = [
    {
      name: 'Mañana',
      value: habits.filter((h) => h.timeOfDay === 'morning').length,
    },
    {
      name: 'Tarde',
      value: habits.filter((h) => h.timeOfDay === 'afternoon').length,
    },
    {
      name: 'Noche',
      value: habits.filter((h) => h.timeOfDay === 'evening').length,
    },
    {
      name: 'Cualquier momento',
      value: habits.filter((h) => h.timeOfDay === 'anytime').length,
    },
  ];

  // Colores para los gráficos
  const COLORS = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-warning)',
    'var(--color-error)',
  ];

  // Datos para el gráfico de completados por día (últimos 7 días)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  const completionByDay = last7Days.map((date) => {
    const completed = habits.filter((habit) =>
      habit.completedDates.includes(date)
    ).length;
    // Formatear la fecha para mostrar solo el día
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
    });
    return {
      date: formattedDate,
      completed,
    };
  });

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Estadísticas</h1>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total de hábitos"
          value={totalHabits}
          icon={<Calendar size={24} className="text-[var(--color-primary)]" />}
          color="bg-[var(--color-blue)] dark:bg-[var(--color-blue)]/40"
        />
        <StatsCard
          title="Completados hoy"
          value={habitsCompletedToday}
          icon={
            <CheckCircle size={24} className="text-[var(--color-success)]" />
          }
          color="bg-[var(--color-green)] dark:bg-[var(--color-green)]/40"
        />
        <StatsCard
          title="Tasa de completado"
          value={`${completionRate}%`}
          description="Porcentaje de hábitos completados hoy"
          icon={<Activity size={24} className="text-[var(--color-warning)]" />}
          color="bg-[var(--color-orange)] dark:bg-[var(--color-orange)]/40"
        />
        <StatsCard
          title="Momento más común"
          value={
            timeOfDayData.sort((a, b) => b.value - a.value)[0]?.name || 'N/A'
          }
          icon={<Clock size={24} className="text-[var(--color-error)]" />}
          color="bg-[var(--color-pink)] dark:bg-[var(--color-pink)]/40"
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de completados por día */}
        <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-5">
          <h2 className="text-lg font-semibold mb-4">
            Hábitos completados (últimos 7 días)
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={completionByDay}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-text-secondary)"
                />
                <XAxis dataKey="date" stroke="var(--color-text-primary)" />
                <YAxis stroke="var(--color-text-primary" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-gray)',
                    border: 'none',
                    borderRadius: '0.375rem',
                    color: 'var(--color-white)',
                  }}
                />
                <Bar
                  dataKey="completed"
                  fill="var(--color-primary)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráficos de distribución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Distribución por frecuencia */}
          <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-5">
            <h2 className="text-lg font-semibold mb-2">
              Distribución por frecuencia
            </h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={frequencyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                  >
                    {frequencyData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distribución por momento del día */}
          <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-5">
            <h2 className="text-lg font-semibold mb-2">
              Distribución por momento
            </h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeOfDayData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                  >
                    {timeOfDayData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatsPage;
