import { DateOptions, DateRange, FilterOption } from "../types";

export const convertDateFormat = (oldDate: string) => {
  const date = new Date(oldDate).toString().split(" ");
  const newFormat = ` ${date[2]}  ${date[1]}, ${date[3]}`;
  return newFormat;
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: DateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const formatFilterDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatDateRange = (start: Date, end: Date): string => {
  if (start.toDateString() === end.toDateString()) {
    return formatFilterDate(start);
  }

  if (start.getFullYear() === end.getFullYear()) {
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString("en-US", {
        month: "short",
      })} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${start.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} - ${formatFilterDate(end)}`;
  }

  return `${formatFilterDate(start)} - ${formatFilterDate(end)}`;
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
};

export const formatCreatedAt = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

const getStartOfWeek = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day;
  return new Date(d.setDate(diff));
};

const addMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

export const getDateRange = (
  filterType: FilterOption,
  today: Date = new Date(),
): DateRange => {
  const startOfToday = new Date(today.setHours(0, 0, 0, 0));

  switch (filterType) {
    case "daily":
      return { start: new Date(startOfToday), end: new Date(startOfToday) };

    case "weekly":
      return {
        start: getStartOfWeek(startOfToday),
        end: new Date(startOfToday),
      };

    case "monthly":
      return {
        start: new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 1),
        end: new Date(startOfToday),
      };

    case "last_month":
      const lastMonth = addMonths(startOfToday, -1);
      return {
        start: new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1),
        end: new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 0),
      };

    default:
      return { start: new Date(startOfToday), end: new Date(startOfToday) };
  }
};
