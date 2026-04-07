const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalendarWeekdays() {
  return (
    <div className="grid grid-cols-7 text-center">
      {weekdays.map((day) => (
        <span key={day} className="text-muted-foreground w-14">
          {day}
        </span>
      ))}
    </div>
  );
}

export { CalendarWeekdays };
