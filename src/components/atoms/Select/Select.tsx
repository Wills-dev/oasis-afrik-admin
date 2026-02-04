import { optionsType } from "@/lib/types";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: optionsType[];
  placeholder?: string;
}

const Select = ({
  options,
  placeholder,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <div className="relative flex items-center backdrop-blur-2xl bg-white/25 rounded-lg border border-gray-200 transition-all focus-within:border-[#009933] duration-300 sm:h-12 h-11">
      <select
        style={{ fontSize: "16px" }}
        className={`bg-transparent outline-none min-w-full w-full h-full max-w-full ${className}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
