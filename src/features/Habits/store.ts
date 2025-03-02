import { create } from 'zustand';
import { HABITS_MOCK } from '@/features/Habits/data/habits';
import { HabitInterface } from '@/features/Habits/types';

interface HabitState {
  habits: HabitInterface[];
  addHabit: (
    habit: Omit<HabitInterface, 'id' | 'createdAt' | 'completedDates'>
  ) => void;
  toggleCompletion: (habitId: string, date: string) => void;
  removeHabit: (habitId: string) => void;
}

export const useHabitStore = create<HabitState>((set) => ({
  habits: HABITS_MOCK,
  addHabit: (habit) =>
    set((state) => ({
      habits: [
        ...state.habits,
        {
          ...habit,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          completedDates: []
        }
      ]
    })),
  updateHabit: (updatedHabit: HabitInterface) => {
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit
      )
    }));
  },
  toggleCompletion: (habitId, date) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              completedDates: habit.completedDates.includes(date)
                ? habit.completedDates.filter((d) => d !== date)
                : [...habit.completedDates, date]
            }
          : habit
      )
    })),
  removeHabit: (habitId) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit.id !== habitId)
    })),
  getHabit: (habitId: string) => {
    const state = useHabitStore.getState();
    return state.habits.find((habit) => habit.id === habitId);
  }
}));
