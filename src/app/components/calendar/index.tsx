import CalendarHeader from "./header";
import { HeroImage } from "./hero-image";

function Calendar() {
  return (
    <div className="flex bg-card-background shadow-2xl">
      <HeroImage />

      <div className="px-20">
        <CalendarHeader firstDayOfMonth={new Date()} />
      </div>
    </div>
  );
}

export { Calendar };
