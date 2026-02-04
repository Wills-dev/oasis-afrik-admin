"use client";

import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  icon?: React.ReactNode;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  showPassword?: "text" | "password";
  onTogglePassword?: () => void;
}

const Input = ({
  showPassword,
  placeholder = "",
  onChange,
  value,
  onTogglePassword,
  type,
  icon,
  name,
}: InputProps) => {
  const paddingX =
    icon !== undefined && showPassword !== undefined
      ? "px-10"
      : icon !== undefined && showPassword === undefined
        ? "pl-10 pr-2"
        : icon === undefined && showPassword !== undefined
          ? "pl-2 pr-10"
          : "px-2";

  return (
    <div className="relative flex items-center backdrop-blur-2xl bg-white/25 rounded-lg border border-gray-200 transition-all focus-within:border-[#009933] duration-300 p-1">
      {icon && icon}
      <input
        style={{ fontSize: "16px" }}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`w-full bg-transparent h-9 text-gray-900 placeholder-gray-400 outline-none ${paddingX} placeholder:text-xs`}
        placeholder={placeholder}
      />
      {showPassword !== undefined && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-2 text-gray-600 hover:text-gray-800 transition-colors caret-[#009933]"
        >
          {showPassword === "text" ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
