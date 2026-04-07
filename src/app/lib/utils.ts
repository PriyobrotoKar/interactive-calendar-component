import { getDaysInMonth } from 'date-fns';

export function constructCalendarDates(startDate: Date, endDate?: Date): number[] {
  if (endDate) {
    const interval = endDate.getDate() - startDate.getDate();
    if (interval > 31) throw new Error('Start and End dates should be within the same month');
    return Array.from({ length: interval }, (_, i) => startDate.getDate() + i);
  }

  const daysInMonth = getDaysInMonth(startDate);
  const remainingDays = daysInMonth - startDate.getDate() + 1;
  return Array.from({ length: remainingDays }, (_, i) => startDate.getDate() + i);
}
