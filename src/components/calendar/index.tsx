'use client';

import { useState } from 'react';

import { add, format, parse, sub } from 'date-fns';

import { Button } from '../ui/button';
import { CalendarDays } from './calendar-days';
import { CalendarWeekdays } from './calendar-weekdays';
import { CalendarHeader } from './header';
import { HeroImage } from './hero-image';
import { CalendarNotes } from './notes';

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const firstDayOfMonth = parse(currentMonth, 'MMMM yyyy', today);

  const handlePrevMonth = () => {
    const firstDayOfPrevMonth = sub(firstDayOfMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfPrevMonth, 'MMMM yyyy'));
  };

  const handleNextMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, 'MMMM yyyy'));
  };

  return (
    <div className="bg-card-background flex w-full max-w-2xl flex-col items-center shadow-2xl lg:w-fit lg:max-w-none lg:flex-row">
      <HeroImage />

      <div className="shrink-0 space-y-7 px-8 sm:px-20 lg:space-y-8">
        <CalendarHeader firstDayOfMonth={firstDayOfMonth} />
        <div className="space-y-2 sm:space-y-4">
          <CalendarWeekdays />
          <CalendarDays
            today={today}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            firstDayOfMonth={firstDayOfMonth}
          />
        </div>

        <CalendarNotes currentMonth={currentMonth} startDate={startDate} endDate={endDate} />

        {/*<div>
          <Button onClick={handlePrevMonth}>Prev</Button>
          <Button onClick={handleNextMonth}>Next</Button>
        </div>*/}
      </div>
    </div>
  );
}

export { Calendar };
