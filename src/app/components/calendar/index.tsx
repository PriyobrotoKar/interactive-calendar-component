'use client';

import { useState } from 'react';

import { format, parse } from 'date-fns';

import { CalendarDays } from './calendar-days';
import { CalendarWeekdays } from './calendar-weekdays';
import { CalendarHeader } from './header';
import { HeroImage } from './hero-image';

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));

  const firstDayOfMonth = parse(currentMonth, 'MMMM yyyy', today);

  return (
    <div className="bg-card-background flex shadow-2xl">
      <HeroImage />

      <div className="space-y-8 px-20">
        <CalendarHeader firstDayOfMonth={firstDayOfMonth} />
        <div className="space-y-4">
          <CalendarWeekdays />
          <CalendarDays firstDayOfMonth={firstDayOfMonth} />
        </div>
      </div>
    </div>
  );
}

export { Calendar };
