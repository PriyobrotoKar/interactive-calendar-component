import { ComponentProps } from 'react';

import { add, sub } from 'date-fns';

import { Button } from '@/components/ui/button';
import { constructCalendarDates } from '@/lib/utils';

interface CalendarDaysProps {
  firstDayOfMonth: Date;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

function CalendarDays({
  firstDayOfMonth,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: CalendarDaysProps) {
  const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const weekdayOfLastDay = sub(firstDayOfNextMonth, { days: 1 }).getDay();

  console.log(startDate);

  const handleDayClick = (day: Date) => {
    if (!startDate) setStartDate(day);
    else if (day < startDate) {
      if (!endDate) {
        setStartDate(day);
        setEndDate(startDate);
      } else {
        setStartDate(day);
      }
    } else if (day > startDate) {
      if (day.getTime() === endDate?.getTime()) {
        setStartDate(day);
        setEndDate(null);
      } else {
        setEndDate(day);
      }
    } else setEndDate(null);
  };

  const isDayActive = (day: Date) => {
    return (
      day.toISOString() === startDate?.toISOString() || day.toISOString() === endDate?.toISOString()
    );
  };

  const isDayInRange = (day: Date) => {
    if (!startDate || !endDate) return false;
    return day > startDate && day < endDate;
  };

  return (
    <div className="grid w-fit grid-cols-7 gap-y-1 text-center">
      {weekdayOfFirstDay > 0 &&
        constructCalendarDates(sub(firstDayOfMonth, { days: weekdayOfFirstDay })).map((day) => (
          <CalendarDay key={day.toISOString()} day={day.getDate()} disabled />
        ))}
      {constructCalendarDates(firstDayOfMonth).map((day) => (
        <CalendarDay
          data-active={isDayActive(day)}
          data-range-middle={isDayInRange(day)}
          data-range-start={day.toISOString() === startDate?.toISOString()}
          data-range-end={day.toISOString() === endDate?.toISOString()}
          key={day.toISOString()}
          day={day.getDate()}
          onClick={() => handleDayClick(day)}
        />
      ))}
      {constructCalendarDates(
        firstDayOfNextMonth,
        add(firstDayOfNextMonth, { days: 7 - weekdayOfLastDay - 1 }),
      ).map((day) => (
        <CalendarDay key={day.toISOString()} day={day.getDate()} disabled />
      ))}
    </div>
  );
}

interface CalendarDayProps extends ComponentProps<'button'> {
  day: number;
}

function CalendarDay({ day, disabled, ...props }: CalendarDayProps) {
  return (
    <div className="has-data-[active=true]:after:bg-muted relative z-0 has-data-[active=true]:after:absolute has-data-[active=true]:after:top-0 has-data-[active=true]:after:h-full has-data-[active=true]:after:w-1/2 has-data-[range-end=true]:after:left-0 has-data-[range-start=true]:after:right-0">
      <Button
        variant={'ghost'}
        className="data-[range-middle=true]:bg-muted data-[range-middle=true]:text-muted-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground relative z-10 flex size-14 items-center justify-center border-0 font-mono text-lg data-[range-middle=true]:rounded-none"
        {...props}
        disabled={disabled}
      >
        {day}
      </Button>
    </div>
  );
}

export { CalendarDays };
