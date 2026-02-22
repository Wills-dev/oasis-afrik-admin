import { FilterOption } from "../types";

export const filterLabels: Record<FilterOption, string> = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  last_month: "Last month",
  custom: "Custom range",
};

export const menuItems: { label: string; value: FilterOption }[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Last Month", value: "last_month" },
  { label: "Custom range", value: "custom" },
];
