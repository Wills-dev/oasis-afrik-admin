import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className = "", ...props }: TextareaProps) => {
  return (
    <textarea
      style={{ fontSize: "16px" }}
      className={`relative flex w-full items-center backdrop-blur-2xl bg-white/25 rounded-lg border border-gray-200 transition-all focus-within:border-[#009933] duration-300 outline-none p-2 ${className}`}
      {...props}
    ></textarea>
  );
};

export default Textarea;
