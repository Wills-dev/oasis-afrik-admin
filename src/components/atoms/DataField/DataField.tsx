import Link from "next/link";

const DataField = ({
  label,
  value,
  large = false,
  href,
}: {
  label: string;
  value: string;
  large?: boolean;
  href?: string;
}) => {
  return (
    <div>
      <p className="text-xs font-medium text-slate-500 mb-1">{label}</p>
      {href ? (
        <Link
          href={href}
          className={`font-semibold text-slate-900 hover:text-green-600 hover:underline transition-all duration-300 ${large ? "text-lg" : ""}`}
        >
          {value}
        </Link>
      ) : (
        <p className={`font-semibold text-slate-900 ${large ? "text-lg" : ""}`}>
          {value}
        </p>
      )}
    </div>
  );
};

export default DataField;
