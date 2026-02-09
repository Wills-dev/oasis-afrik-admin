const InfoRow = ({
  label,
  value,
  highlight = false,
  mono = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  mono?: boolean;
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-600 mb-1 sm:mb-0">
        {label}
      </span>
      <span
        className={`font-semibold ${highlight ? "text-green-700 text-lg" : "text-gray-900"} ${mono ? "font-mono text-xs" : ""}`}
      >
        {value}
      </span>
    </div>
  );
};

export default InfoRow;
