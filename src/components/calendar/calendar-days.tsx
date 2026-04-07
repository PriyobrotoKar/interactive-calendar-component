import { add, sub } from 'date-fns';

import { Button } from '@/components/ui/button';
import { constructCalendarDates } from '@/lib/utils';

interface CalendarDaysProps {
  firstDayOfMonth: Date;
}

function CalendarDays({ firstDayOfMonth }: CalendarDaysProps) {
  const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const weekdayOfLastDay = sub(firstDayOfNextMonth, { days: 1 }).getDay();

  console.log(firstDayOfMonth, weekdayOfFirstDay, weekdayOfLastDay);

  return (
    <div className="grid grid-cols-7 gap-4 text-center">
      {weekdayOfFirstDay > 0 &&
        constructCalendarDates(sub(firstDayOfMonth, { days: weekdayOfFirstDay })).map((day) => (
          <CalendarDay key={day} day={day} disabled />
        ))}
      {constructCalendarDates(firstDayOfMonth).map((day) => (
        <CalendarDay key={day} day={day} />
      ))}
      {constructCalendarDates(
        firstDayOfNextMonth,
        add(firstDayOfNextMonth, { days: 7 - weekdayOfLastDay - 1 }),
      ).map((day) => (
        <CalendarDay key={day} day={day} disabled />
      ))}
    </div>
  );
}

interface CalendarDayProps {
  day: number;
  disabled?: boolean;
}

function CalendarDay({ day, disabled }: CalendarDayProps) {
  return (
    <Button
      variant={'ghost'}
      className="flex size-10 items-center justify-center font-mono text-lg"
      disabled={disabled}
    >
      {day}
    </Button>
  );
}

export { CalendarDays };
