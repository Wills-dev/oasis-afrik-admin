"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      onClick={goBack}
      className="px-4 py-2 flex items-center gap-2 text-sm text-gray-800 rounded-lg hover:text-green-600 cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" /> Go Back
    </button>
  );
}
