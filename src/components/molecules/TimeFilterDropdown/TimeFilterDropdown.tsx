"use client";

import { useState } from "react";

import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { timePeriods } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface TimeFilterDropdownProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const TimeFilterDropdown = ({
  value,
  onChange,
  className = "",
}: TimeFilterDropdownProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>(value || "");

  const handleSelect = (period: string) => {
    setSelectedPeriod(period);
    onChange?.(period);
  };

  const selectedLabel =
    timePeriods.find((p) => p.value === selectedPeriod)?.label || "Weekly";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`justify-between min-w-[140px] ${className}`}
        >
          <span>{selectedLabel}</span>
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[140px]">
        {timePeriods.map((period) => (
          <DropdownMenuItem
            key={period.value}
            onClick={() => handleSelect(period.value)}
            className="cursor-pointer"
          >
            <Check
              className={`mr-2 h-4 w-4 ${
                selectedPeriod === period.value ? "opacity-100" : "opacity-0"
              }`}
            />
            {period.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TimeFilterDropdown;
