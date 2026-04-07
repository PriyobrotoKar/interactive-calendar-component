import { type ClassValue, clsx } from 'clsx';
import { getDaysInMonth } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructCalendarDates(startDate: Date, endDate?: Date): Date[] {
  if (endDate) {
    const interval = endDate.getDate() - startDate.getDate();
    if (interval > 31) throw new Error('Start and End dates should be within the same month');
    return Array.from({ length: interval }, (_, i) => {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    });
  }

  const daysInMonth = getDaysInMonth(startDate);
  const remainingDays = daysInMonth - startDate.getDate() + 1;
  return Array.from({ length: remainingDays }, (_, i) => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + i);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  });
}
