const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalendarWeekdays() {
  return (
    <div className="grid grid-cols-7 gap-4 text-center">
      {weekdays.map((day) => (
        <span key={day} className="text-muted-foreground w-10">
          {day}
        </span>
      ))}
    </div>
  );
}

export { CalendarWeekdays };
