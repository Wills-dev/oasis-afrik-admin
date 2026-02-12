interface LabelProps {
  title: string;
  className?: string;
}

const Label = ({
  title,
  className = "text-sm font-medium text-gray-800 capitalize",
}: LabelProps) => {
  return <label className={`block ${className}`}>{title}</label>;
};

export default Label;
