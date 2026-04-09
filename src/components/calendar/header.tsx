interface CalendarHeaderProps {
  firstDayOfMonth: Date;
}

function CalendarHeader({ firstDayOfMonth }: CalendarHeaderProps) {
  const monthIndex = firstDayOfMonth.getMonth() + 1;

  const [monthName, year] = firstDayOfMonth
    .toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    })
    .split(' ');

  return (
    <div className="flex h-20 items-end justify-between sm:h-28">
      <div className="flex items-end self-stretch bg-(--calendar-accent) p-4 font-mono text-xl text-(--calendar-accent-foreground) sm:text-4xl">
        <span>{monthIndex.toString().padStart(2, '0')}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-lg sm:text-xl">{year}</span>
        <h1 className="text-xl-bold uppercase sm:text-2xl">{monthName}</h1>
      </div>
    </div>
  );
}

export { CalendarHeader };
