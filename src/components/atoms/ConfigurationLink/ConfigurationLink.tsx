"use client";

import Link from "next/link";

import { useActivePath } from "@/lib/hooks/useActivePath";

const ConfigurationLink = ({ name, link }: { name: string; link: string }) => {
  const isActive = useActivePath(link);
  return (
    <Link
      href={link}
      className={`uppercase text-sm h-full flex items-center transition-all duration-300 whitespace-nowrap ${
        isActive
          ? "border-b-2 border-green-700 text-gray-800  font-medium"
          : "hover:scale-105 text-gray-700"
      }`}
    >
      {name}
    </Link>
  );
};

export default ConfigurationLink;
