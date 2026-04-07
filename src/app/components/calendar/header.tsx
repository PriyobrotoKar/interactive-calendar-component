interface CalendarHeaderProps {
  firstDayOfMonth: Date;
}

export default function CalendarHeader({
  firstDayOfMonth,
}: CalendarHeaderProps) {
  const monthIndex = firstDayOfMonth.getMonth();

  const [monthName, year] = firstDayOfMonth
    .toLocaleString("default", {
      month: "long",
      year: "numeric",
    })
    .split(" ");

  return (
    <div className="flex justify-between items-end w-xs h-28">
      <div className="bg-accent self-stretch text-4xl flex items-end text-accent-foreground p-4 font-mono">
        <span>{monthIndex.toString().padStart(2, "0")}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-xl">{year}</span>
        <h1 className="text-2xl uppercase">{monthName}</h1>
      </div>
    </div>
  );
}
