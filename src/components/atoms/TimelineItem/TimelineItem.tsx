const TimelineItem = ({
  label,
  date,
  active = false,
}: {
  label: string;
  date: string;
  active?: boolean;
}) => {
  return (
    <div className="flex gap-3">
      <div
        className={`w-2 h-2 rounded-full mt-2 shrink-0 ${active ? "bg-green-600" : "bg-gray-300"}`}
      />
      <div>
        <p
          className={`font-semibold ${active ? "text-gray-900" : "text-gray-500"}`}
        >
          {label}
        </p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
