import { create } from 'zustand';
import { HabitInterface } from '../types';
import { HABITS_MOCK } from '../mocks/habits';

interface HabitState {
  habits: HabitInterface[];
  addHabit: (habit: HabitInterface) => void;
  toggleCompletion: (habitId: string, date: string) => void;
  removeHabit: (habitId: string) => void;
}

export const useHabitStore = create<HabitState>((set) => ({
  habits: HABITS_MOCK,
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
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
    }))
}));
