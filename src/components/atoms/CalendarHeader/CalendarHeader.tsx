import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isNextDisabled: boolean;
}

const CalendarHeader = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  isNextDisabled,
}: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onPrevMonth}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
      <div className="font-semibold text-base text-gray-900 dark:text-gray-100">
        {currentMonth.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </div>
      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isNextDisabled}
      >
        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default CalendarHeader;
