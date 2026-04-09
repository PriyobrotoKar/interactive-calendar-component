import { add, format, sub } from 'date-fns';
import Image from 'next/image';

interface CalendarNavigationProps {
  firstDayOfMonth: Date;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
}

export function CalendarNavigation({
  firstDayOfMonth,
  goToPrevMonth,
  goToNextMonth,
}: CalendarNavigationProps) {
  const prevMonth = format(sub(firstDayOfMonth, { days: 1 }), 'MMM');
  const nextMonth = format(add(firstDayOfMonth, { months: 1 }), 'MMM');

  return (
    <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between">
      <div
        role="button"
        onClick={goToPrevMonth}
        className="bg-muted relative h-12 w-17 overflow-hidden rounded-tr rounded-bl transition-all hover:h-16 hover:w-22.5 active:h-17 active:w-24 sm:h-14 sm:w-20"
      >
        <Image
          src={'/page-peel.svg'}
          alt="Page peel"
          width={80}
          height={60}
          className="relative z-10 h-full w-full -scale-x-[1]"
        />
        <span className="text-muted-foreground absolute bottom-3 left-4 uppercase">
          {prevMonth}
        </span>
      </div>

      <div
        role="button"
        onClick={goToNextMonth}
        className="bg-muted relative h-12 w-17 overflow-hidden rounded-tl rounded-br transition-all hover:h-16 hover:w-22.5 active:h-17 active:w-24 sm:h-14 sm:w-20"
      >
        <Image
          src={'/page-peel.svg'}
          alt="Page peel"
          width={80}
          height={60}
          className="relative z-10 h-full w-full"
        />
        <span className="text-muted-foreground absolute right-4 bottom-3 uppercase">
          {nextMonth}
        </span>
      </div>
    </div>
  );
}
