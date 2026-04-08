const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalendarWeekdays() {
  return (
    <div className="grid grid-cols-7 text-center">
      {weekdays.map((day) => (
        <span key={day} className="text-muted-foreground w-10 text-sm sm:w-12 sm:text-base lg:w-14">
          {day}
        </span>
      ))}
    </div>
  );
}

export { CalendarWeekdays };
