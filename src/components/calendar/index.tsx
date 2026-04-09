'use client';

import { useState } from 'react';

import { add, format, parse, sub } from 'date-fns';
import Image from 'next/image';

import { CalendarDays } from './calendar-days';
import { CalendarNavigation } from './calendar-navigation';
import { CalendarWeekdays } from './calendar-weekdays';
import { CalendarHeader } from './header';
import { HeroImage } from './hero-image';
import { CalendarNotes } from './notes';
import { CalendarMonthTheme, defaultMonthThemes } from './theme';

interface CalendarProps {
  monthThemes?: CalendarMonthTheme[];
}

function Calendar({ monthThemes = defaultMonthThemes }: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const firstDayOfMonth = parse(currentMonth, 'MMMM yyyy', today);
  const currentTheme = monthThemes?.find((theme) => theme.month === firstDayOfMonth.getMonth());

  if (!currentTheme) return null;

  const handlePrevMonth = () => {
    const firstDayOfPrevMonth = sub(firstDayOfMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfPrevMonth, 'MMMM yyyy'));
  };

  const handleNextMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, 'MMMM yyyy'));
  };

  return (
    <div
      style={
        {
          '--calendar-accent': currentTheme.accentBg,
          '--calendar-accent-foreground': currentTheme.accentText,
        } as React.CSSProperties
      }
      className="bg-card relative flex w-full max-w-2xl flex-col items-center rounded shadow-2xl lg:w-fit lg:max-w-none lg:flex-row"
    >
      <div className="absolute -top-1 left-1/2 -translate-x-1/2">
        <Image
          src={'/binding.svg'}
          alt="Calendar Binding"
          width={660}
          height={28}
          className="min-w-64 sm:min-w-md lg:min-w-2xl"
        />
      </div>

      <HeroImage theme={currentTheme} />

      <div className="shrink-0 space-y-7 px-6 sm:px-20 lg:space-y-8">
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

        <CalendarNavigation
          firstDayOfMonth={firstDayOfMonth}
          goToPrevMonth={handlePrevMonth}
          goToNextMonth={handleNextMonth}
        />
      </div>
    </div>
  );
}

export { Calendar };
