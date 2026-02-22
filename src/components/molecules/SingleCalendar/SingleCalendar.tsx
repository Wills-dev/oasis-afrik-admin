import WeekdayLabels from "@/components/atoms/WeekdayLabels/WeekdayLabels";
import CalendarHeader from "@/components/atoms/CalendarHeader/CalendarHeader";
import CalendarGrid from "../CalendarGrid/CalendarGrid";

import { addMonths } from "date-fns";

interface SingleCalendarProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  customStart: Date | null;
  customEnd: Date | null;
  onDateSelect: (date: Date) => void;
}

const SingleCalendar = ({
  currentMonth,
  setCurrentMonth,
  customStart,
  customEnd,
  onDateSelect,
}: SingleCalendarProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isNextDisabled =
    currentMonth.getMonth() >= today.getMonth() &&
    currentMonth.getFullYear() >= today.getFullYear();

  return (
    <div className="p-6 w-80">
      <CalendarHeader
        currentMonth={currentMonth}
        onPrevMonth={() => setCurrentMonth(addMonths(currentMonth, -1))}
        onNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
        isNextDisabled={isNextDisabled}
      />
      <WeekdayLabels />
      <CalendarGrid
        currentMonth={currentMonth}
        customStart={customStart}
        customEnd={customEnd}
        onDateSelect={onDateSelect}
      />
    </div>
  );
};

export default SingleCalendar;
