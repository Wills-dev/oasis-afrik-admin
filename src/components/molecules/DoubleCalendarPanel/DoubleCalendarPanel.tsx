import SingleCalendar from "../SingleCalendar/SingleCalendar";

interface DoubleCalendarPanelProps {
  currentMonth1: Date;
  setCurrentMonth1: (date: Date) => void;
  currentMonth2: Date;
  setCurrentMonth2: (date: Date) => void;
  customStart: Date | null;
  customEnd: Date | null;
  onDateSelect: (date: Date) => void;
  maxDays?: number;
}

const DoubleCalendarPanel = ({
  currentMonth1,
  setCurrentMonth1,
  currentMonth2,
  setCurrentMonth2,
  customStart,
  customEnd,
  onDateSelect,
  maxDays,
}: DoubleCalendarPanelProps) => {
  return (
    <div className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50">
      <div className="flex">
        <SingleCalendar
          currentMonth={currentMonth1}
          setCurrentMonth={setCurrentMonth1}
          customStart={customStart}
          customEnd={customEnd}
          onDateSelect={onDateSelect}
        />
        <div className="border-l border-gray-200 dark:border-gray-700" />
        <SingleCalendar
          currentMonth={currentMonth2}
          setCurrentMonth={setCurrentMonth2}
          customStart={customStart}
          customEnd={customEnd}
          onDateSelect={onDateSelect}
        />
      </div>
      {maxDays !== undefined && (
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-b-xl">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="font-semibold">Note:</strong> You can select only
            a maximum of {maxDays} days.
          </p>
        </div>
      )}
    </div>
  );
};

export default DoubleCalendarPanel;
