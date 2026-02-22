interface DropdownMenuItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const DropdownMenuItem = ({
  label,
  isSelected,
  onClick,
}: DropdownMenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
        isSelected
          ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
          : "text-gray-700 dark:text-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default DropdownMenuItem;
