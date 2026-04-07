import { constructCalendarDates } from '@/app/lib/utils';
import { add, sub } from 'date-fns';

interface CalendarDaysProps {
  firstDayOfMonth: Date;
}

function CalendarDays({ firstDayOfMonth }: CalendarDaysProps) {
  const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const weekdayOfLastDay = sub(firstDayOfNextMonth, { days: 1 }).getDay();

  return (
    <div className="grid grid-cols-7 gap-4 text-center">
      {constructCalendarDates(sub(firstDayOfMonth, { days: weekdayOfFirstDay })).map((day) => (
        <CalendarDay key={day} day={day} />
      ))}
      {constructCalendarDates(firstDayOfMonth).map((day) => (
        <CalendarDay key={day} day={day} />
      ))}
      {constructCalendarDates(
        firstDayOfNextMonth,
        add(firstDayOfNextMonth, { days: 7 - weekdayOfLastDay - 1 }),
      ).map((day) => (
        <CalendarDay key={day} day={day} />
      ))}
    </div>
  );
}

interface CalendarDayProps {
  day: number;
}

function CalendarDay({ day }: CalendarDayProps) {
  return <span className="flex size-10 items-center justify-center font-mono text-lg">{day}</span>;
}

export { CalendarDays };
