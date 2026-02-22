import CalendarDayCell from "@/components/atoms/CalendarDayCell/CalendarDayCell";
import { isSameDay } from "@/lib/helpers/dateFormats";

interface CalendarGridProps {
  currentMonth: Date;
  customStart: Date | null;
  customEnd: Date | null;
  onDateSelect: (date: Date) => void;
}

const CalendarGrid = ({
  currentMonth,
  customStart,
  customEnd,
  onDateSelect,
}: CalendarGridProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const days = [];
  const current = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  const isInRange = (date: Date) => {
    if (!customStart) return false;
    if (!customEnd) return isSameDay(date, customStart);
    return date >= customStart && date <= customEnd;
  };

  const isRangeStart = (date: Date) =>
    customStart && isSameDay(date, customStart);
  const isRangeEnd = (date: Date) => customEnd && isSameDay(date, customEnd);

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, i) => {
        const isCurrentMonth = day.getMonth() === month;
        const isToday = isSameDay(day, today);
        const isFuture = day > today;
        const inRange = isInRange(day);
        const isStart = isRangeStart(day) || false;
        const isEnd = isRangeEnd(day) || false;

        return (
          <CalendarDayCell
            key={i}
            day={day}
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            isFuture={isFuture}
            inRange={inRange}
            isStart={isStart}
            isEnd={isEnd}
            onClick={() => !isFuture && onDateSelect(day)}
          />
        );
      })}
    </div>
  );
};

export default CalendarGrid;
