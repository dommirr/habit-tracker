import { HabitInterface } from '../types';

export const HABITS_MOCK: HabitInterface[] = [
  {
    id: '1',
    name: 'Meditar',
    description: 'Meditar durante 10 minutos',
    frequency: 'daily',
    timeOfDay: 'morning',
    color: 'bg-[var(--color-purple)]',
    createdAt: '2023-01-01',
    completedDates: ['2023-04-01', '2023-04-02', '2023-04-03']
  },
  {
    id: '2',
    name: 'Ejercicio',
    description: 'Hacer 30 minutos de ejercicio',
    frequency: 'daily',
    timeOfDay: 'afternoon',
    color: 'bg-[var(--color-green)]',
    createdAt: '2023-01-15',
    completedDates: ['2023-04-01', '2023-04-03']
  },
  {
    id: '3',
    name: 'Leer',
    description: 'Leer un libro durante 20 minutos',
    frequency: 'daily',
    timeOfDay: 'evening',
    color: 'bg-[var(--color-yellow)]',
    createdAt: '2023-02-01',
    completedDates: ['2023-04-02']
  },
  {
    id: '4',
    name: 'Beber agua',
    description: 'Beber 2 litros de agua',
    frequency: 'daily',
    timeOfDay: 'anytime',
    color: 'bg-[var(--color-blue)]',
    createdAt: '2023-02-15',
    completedDates: ['2023-04-01', '2023-04-02', '2023-04-03']
  },
  {
    id: '5',
    name: 'Llamar a familia',
    description: 'Llamar a mis padres',
    frequency: 'weekly',
    timeOfDay: 'evening',
    color: 'bg-[var(--color-red)]',
    createdAt: '2023-03-01',
    completedDates: ['2023-04-02']
  }
];
