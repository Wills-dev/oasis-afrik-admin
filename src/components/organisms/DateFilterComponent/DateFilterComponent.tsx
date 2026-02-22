"use client";

import { useEffect, useRef, useState } from "react";

import { addMonths } from "date-fns";
import { ChevronDown } from "lucide-react";

import { getDateRange } from "@/lib/helpers/dateFormats";
import { DateFilterValue, FilterOption } from "@/lib/types";

import DropdownMenu from "@/components/molecules/DropdownMenu/DropdownMenu";
import DoubleCalendarPanel from "@/components/molecules/DoubleCalendarPanel/DoubleCalendarPanel";
import toast from "react-hot-toast";
import { toastOption } from "@/lib/helpers/toast";

interface DateFilterProps {
  onDateChange?: (value: DateFilterValue) => void;
  className?: string;
  maxDays?: number;
}

const DateFilterComponent = ({
  onDateChange,
  className = "",
  maxDays,
}: DateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption | string>(
    "",
  );

  const [showCalendar, setShowCalendar] = useState(false);
  const [customStart, setCustomStart] = useState<Date | null>(null);
  const [customEnd, setCustomEnd] = useState<Date | null>(null);
  const [currentMonth1, setCurrentMonth1] = useState(new Date());
  const [currentMonth2, setCurrentMonth2] = useState(addMonths(new Date(), 1));

  const dropdownRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSelect = (filter: FilterOption) => {
    if (filter === "custom") {
      setSelectedFilter(filter);
      setShowCalendar(true);
      setIsOpen(false);
      setCustomStart(null);
      setCustomEnd(null);
    } else {
      const range = getDateRange(filter);
      setSelectedFilter(filter);
      setIsOpen(false);
      setShowCalendar(false);
      onDateChange?.({ label: filter, dateRange: range });
    }
  };

  const handleCustomDateSelect = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date > today) return;

    if (!customStart || (customStart && customEnd)) {
      setCustomStart(date);
      setCustomEnd(null);
    } else {
      if (date < customStart) {
        setCustomStart(date);
        setCustomEnd(null);
      } else {
        if (maxDays !== undefined) {
          const daysDiff = Math.floor(
            (date.getTime() - customStart.getTime()) / (1000 * 60 * 60 * 24),
          );
          if (daysDiff > maxDays) {
            toast.error(
              `You can only select a maximum of ${maxDays} days`,
              toastOption,
            );
            return;
          }
        }

        setCustomEnd(date);
        const range = { start: customStart, end: date };
        setSelectedFilter("custom");
        onDateChange?.({ label: "custom", dateRange: range });
        setShowCalendar(false);
      }
    }
  };

  const getDisplayText = () => {
    if (selectedFilter === "") {
      return "Filter by date";
    }
    if (selectedFilter === "custom" && (!customStart || !customEnd)) {
      return "Custom range";
    }
    return selectedFilter;
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="flex items-center gap-2">
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setShowCalendar(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {getDisplayText()}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <DropdownMenu
            isOpen={isOpen}
            selectedFilter={selectedFilter}
            onSelect={handleFilterSelect}
          />
        </div>
      </div>

      {showCalendar && (
        <div ref={calendarRef}>
          <DoubleCalendarPanel
            currentMonth1={currentMonth1}
            setCurrentMonth1={setCurrentMonth1}
            currentMonth2={currentMonth2}
            setCurrentMonth2={setCurrentMonth2}
            customStart={customStart}
            customEnd={customEnd}
            onDateSelect={handleCustomDateSelect}
            maxDays={maxDays}
          />
        </div>
      )}
    </div>
  );
};

export default DateFilterComponent;
