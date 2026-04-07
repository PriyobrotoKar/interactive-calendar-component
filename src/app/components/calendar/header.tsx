interface CalendarHeaderProps {
  firstDayOfMonth: Date;
}

function CalendarHeader({ firstDayOfMonth }: CalendarHeaderProps) {
  const monthIndex = firstDayOfMonth.getMonth();

  const [monthName, year] = firstDayOfMonth
    .toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    })
    .split(' ');

  return (
    <div className="flex h-28 items-end justify-between">
      <div className="bg-accent text-accent-foreground flex items-end self-stretch p-4 font-mono text-4xl">
        <span>{monthIndex.toString().padStart(2, '0')}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-xl">{year}</span>
        <h1 className="text-2xl uppercase">{monthName}</h1>
      </div>
    </div>
  );
}

export { CalendarHeader };
