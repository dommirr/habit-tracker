export interface HabitInterface {
  id: string;
  name: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'anytime';
  color: string;
  createdAt: string;
  completedDates: string[];
}
