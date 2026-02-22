const WeekdayLabels = () => {
  return (
    <div className="grid grid-cols-7 gap-2 mb-3">
      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
        <div
          key={i}
          className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 h-10 flex items-center justify-center"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdayLabels;
